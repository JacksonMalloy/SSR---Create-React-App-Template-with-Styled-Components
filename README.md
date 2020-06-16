An approach to server-side rendering create-react-app
====================

1. install dependencies with `yarn`
2. start the dev server with `yarn start`

We proxy everything to create-react-app's webpack development server to reap the benefits of hot module reloading.

3. start the production build server with `yarn start:prod`

This will bundle the application using react-scripts build, set the environment to production, and start the server.
