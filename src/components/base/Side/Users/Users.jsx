import React from 'react';
import jss from 'jss';
import { NavLink } from 'react-router-dom';
import preset from 'jss-preset-default';

import styles from './styles';
import TMSFE53 from '../../../../configs/TMSFE53';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Users() {
  return (
    <div className={classes.users}>
      <div>
        {TMSFE53.map((user) => (
          <NavLink key={user.name} to={user.url} className={classes.userItem}>
            {user.name}
          </NavLink>
        ))}
      </div>
      <div className={classes.login}>
        {TMSFE53.map((login) => (
          <NavLink key={login.name} to={login.url} className={classes.userItem}>
            {login.login}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Users;
