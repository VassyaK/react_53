import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TextStringTask() {
  return <div className={classes.TextStringTask}></div>;
}

export default TextStringTask;
