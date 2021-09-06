import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Task from '../../Main/Task/Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Users() {
  return (
    <div className={classes.users}>
      <Task />
    </div>
  );
}

export default Users;
