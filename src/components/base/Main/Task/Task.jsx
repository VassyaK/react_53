import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

const Task = ({ children }) => {
  return <div className={classes.task}>{children}</div>;
};
Task.propTypes = {
  children: String || PropTypes.element,
};
export default Task;
