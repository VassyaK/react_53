import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Task from '../../Main/Task';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function About() {
  return (
    <div className={classes.about}>
      About
      <Task className={classes[Task]} />
    </div>
  );
}

export default About;
