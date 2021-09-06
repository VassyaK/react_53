import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

import Task from '../../Main/Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Home() {
  return (
    <div className={classes.home}>
      <Task className={classes[Task]} />
      {/* <Task className={classes[Task]}>
        <Task className={classes.HeaderTask}>
          <Task className={classes.FotoTask}>
            <Task className={classes.IconFotoTask} />
            <Task className={classes.InputFotoTask} />
          </Task>
          <Task className={classes.TextStringTask} />
          <Task className={classes.TextStringTask} />
          <Task className={classes.TextStringTask} />
        </Task>
      </Task>
      <Task className={classes.Task}>
        <Task className={classes.HeaderTask} />
      </Task>
      <Task className={classes.Task} />
      <Task className={classes.Task} /> */}
    </div>
  );
}

export default Home;
