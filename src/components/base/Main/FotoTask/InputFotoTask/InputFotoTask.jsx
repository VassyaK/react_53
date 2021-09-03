import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function InputFotoTask() {
  return <div className={classes.InputFotoTask}></div>;
}

export default InputFotoTask;
