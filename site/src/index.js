import 'nightingale-app-console/src';
import Alp from 'alp-node/src';
import reactredux from 'alp-react-redux/src';
import SimpleLayout from './SimpleLayout';
import { match, createRoutes, RouterContext } from 'react-router';
import Routes from './Routes';

/* routes */
let routes = createRoutes(Routes());
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./Routes', () => {
    routes = createRoutes(Routes());
    // System.import('./Routes').then(module => {
    //   routes = createRoutes(module.default())
    // });
  });
}

const app = new Alp();
// init / config
reactredux({ Layout: SimpleLayout })(app);

// middlewares
app.catchErrors();
app.servePublic();
app.use((ctx) => (
  new Promise((resolve) => (
    match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        ctx.status = 500;
        ctx.body = error.message;
      } else if (redirectLocation) {
        ctx.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        ctx.render({ View: () => <RouterContext {...renderProps} /> })
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
