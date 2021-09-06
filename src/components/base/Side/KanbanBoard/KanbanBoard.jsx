import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

import Task from '../../Main/Task';
import HeaderTask from '../../Main/headerTask/HeaderTask';
import FotoTask from '../../Main/FotoTask/FotoTask';
import TextStringTask from '../../Main/TextStringTask/TextStringTask';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function KanbanBoard() {
  return (
    <div className={classes.kanbanBoard}>
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
    </div>
  );
}

export default KanbanBoard;
