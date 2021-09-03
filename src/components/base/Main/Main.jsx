import React from 'react';
import { Switch, Route } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

import Task from './Task';
import HeaderTask from './headerTask/HeaderTask';
import FotoTask from './FotoTask/FotoTask';
import TextStringTask from './TextStringTask/TextStringTask';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/about">
          <Task>
            <HeaderTask>
              <FotoTask />
              <TextStringTask />
              <TextStringTask />
              <TextStringTask />
            </HeaderTask>
          </Task>
          <Task>
            <HeaderTask />
          </Task>
          <Task />
          <Task />
        </Route>
        <Route path="/users">
          <FotoTask />
        </Route>
        <Route path="/">
          <Task />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
