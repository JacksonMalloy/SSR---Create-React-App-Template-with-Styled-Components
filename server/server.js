import proxy from 'http-proxy-middleware';
import express from 'express';
import renderHtml from './renderHtml'
import Routes from './routes'

const app = express();

const context = {}

Routes.forEach(route => {
  app.get(route.url, (req, res) => {
    return res.send(renderHtml(req, context));
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