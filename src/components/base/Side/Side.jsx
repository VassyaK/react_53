import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-router-dom';
import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <div className={classes.side}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Side;
