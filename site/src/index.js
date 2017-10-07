import 'nightingale-app-console/src';
import Alp from 'alp-node/src';
import createReactredux from 'alp-react-redux/src';
import { match, createRoutes } from 'react-router';
import App from './App';
import Routes from './Routes';

/* routes */
let routes = createRoutes(Routes());
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./Routes', () => {
    routes = createRoutes(Routes());
  });
}

const app = new Alp();
// init / config
const reactredux = createReactredux()(app);
const renderApp = reactredux.createApp(App, {
  scriptName: false,
  styleName: 'styles',
});

// middlewares
app.catchErrors();
app.servePublic();
app.use(reactredux.middleware);
app.use((ctx) => (
  new Promise((resolve, reject) => (
    match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        ctx.status = 500;
        ctx.body = error.message;
      } else if (redirectLocation) {
        ctx.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        ctx.state.renderProps = renderProps;
        return renderApp(ctx)
          .then(resolve)
          .catch(reject);
      } else {
        ctx.status = 404;
      }
      resolve();
    })
  ))
));

app.start(async () => {
  await app.listen();
});
