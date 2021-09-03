import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function HeaderTask({ children }) {
  return <div className={classes.HeaderTask}>{children}</div>;
}
HeaderTask.propTypes = {
  children: String || PropTypes.element,
};
export default HeaderTask;
