import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

import Task from '../../Main/Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function KanbanBoard() {
  return (
    <div className={classes.kanbanBoard}>
      <Task classStyles="Task">
        <Task classStyles="HeaderTask">
          <Task classStyles="FotoTask">
            <Task classStyles="IconFotoTask" />
            <Task classStyles="InputFotoTask" />
          </Task>
          <Task classStyles="TextStringTask" />
          <Task classStyles="TextStringTask" />
          <Task classStyles="TextStringTask" />
        </Task>
      </Task>
      <Task classStyles="Task">
        <Task classStyles="HeaderTask" />
      </Task>
      <Task classStyles="Task" />
      <Task classStyles="Task" />
    </div>
  );
}

export default KanbanBoard;
