// @flow

import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Helmet, AppContainer } from 'alp-react-redux';
import classNames from 'classnames';
import 'ynnub/reset.global.scss';
import 'ynnub/layout/page.global.scss';
import sHolyGrail from 'ynnub/layout/holygrail.scss';
import 'ynnub/interactions/interactions.global.scss';
import { content as contentClassName } from 'ynnub/layout/content.scss';
import { RouterContext } from 'react-router';
import ynnubHead from 'ynnub/Head';
import Sidebar from './Sidebar';


export default connect(
  state => ({ renderProps: state.ctx.state.renderProps })
)(({ renderProps }): ReactElement<typeof AppContainer> => (
  <AppContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${ynnubHead()}
    </Helmet>
    <div className={classNames(sHolyGrail.container, sHolyGrail.body)}>
      <Sidebar className={sHolyGrail.aside} />
      <div className={classNames(sHolyGrail.content, contentClassName)} >
        <RouterContext {...renderProps} />
      </div>
    </div>
  </AppContainer>
));
