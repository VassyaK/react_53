import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import IconFotoTask from './IconFotoTask';
import InputFotoTask from './InputFotoTask';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function FotoTask() {
  return (
    <div className={classes.FotoTask}>
      <IconFotoTask />
      <InputFotoTask />
    </div>
  );
}

export default FotoTask;
