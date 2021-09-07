/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function About() {
  return (
    <div className={classes.about}>
      <img src="https://funik.ru/wp-content/uploads/2018/10/1990c74b723035f47f81.jpg" />
    </div>
  );
}

export default About;
