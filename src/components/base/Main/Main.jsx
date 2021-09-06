/* eslint-disable no-undef */
import React from 'react';
import { Route } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Routes from '../../../configs/Routes';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      {Routes.map((item) => (
        <Route key={item.title} path={item.url} component={item.component} />
      ))}
    </div>
  );
}

export default Main;
