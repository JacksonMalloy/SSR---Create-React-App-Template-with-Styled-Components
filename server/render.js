import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import App from '../src/components/App';
import Html from '../src/Html'

let assets;
if (process.env.NODE_ENV === 'development') {
  // Use the bundle from create-react-app's server in development mode.
  assets = {
    'main.js': '/static/js/bundle.js',
    'main.css': '',
  };
} else {
  assets = require('../build/asset-manifest.json');
}

export default function render(url) {
  console.log(`URL: `, url)

  const sheet = new ServerStyleSheet()

  const context = {}
  const body = renderToString(sheet.collectStyles(
    <StaticRouter location={url} context={context}>
      <App assets={assets} />
    </StaticRouter>
  ));
  const styles = sheet.getStyleTags()
  const title = `SSR React`

  return Html({
    body,
    styles,
    title
  });
}
