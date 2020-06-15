import proxy from 'http-proxy-middleware';
import express from 'express';
import path, { resolve } from 'path';
import fs from 'fs'

const app = express();

// Application
if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    // In development mode we clear the module cache between each request to
    // get automatic hot reloading.
    for (var key in require.cache) {
      delete require.cache[key];
    }
    const render = require('./render').default;
    res.send(render(req.url));
  });
} else {
  const render = require('./render').default

  app.get('*', (req, res) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).send('An error occurred')
      }
      return res.send(render(req.url));
    })
  })
}

// Static resources
app.use(express.static(resolve(__dirname, '..', 'build')));

// Proxy everything else to create-react-app's webpack development server
if (process.env.NODE_ENV === 'development') {
  app.use(
    '/',
    proxy({
      ws: true,
      target: 'http://localhost:3001',
    })
  );
}

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});