import proxy from 'http-proxy-middleware';
import express from 'express';
import path from 'path';
import fs from 'fs'
import renderHtml from './renderHtml'
import Routes from './routes'

const app = express();

const context = {}

Routes.forEach(route => {
  app.get(route.url, (req, res) => {
    const indexFile = path.resolve('./build/index.html')

    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Houston, we have a problem... `, err)
        return res.status(500).send('An error occurred')
      }
      return res.send(renderHtml(req, context));
    })
  });
});

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
  console.log('Launched on port 3000...');
});