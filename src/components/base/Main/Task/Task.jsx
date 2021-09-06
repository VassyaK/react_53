import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

const Task = ({ children, classStyles }) => {
  return <div className={classes[classStyles]}>{children}</div>;
};
Task.propTypes = {
  children: String || PropTypes.element,
  classStyles: String || PropTypes.element,
};

export default Task;
