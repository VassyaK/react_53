import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

import Task from './Task';
import HeaderTask from './headerTask/HeaderTask';
import FotoTask from './FotoTask/FotoTask';
import TextStringTask from './TextStringTask/TextStringTask';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function KanbanBoard() {
  return (
    <div className={classes.kanbanBoard}>
      <Task />
      <Task>
        <HeaderTask>
          <FotoTask />
          <TextStringTask />
          <TextStringTask />
          <TextStringTask />
        </HeaderTask>
      </Task>
    </div>
  );
}

export default KanbanBoard;
