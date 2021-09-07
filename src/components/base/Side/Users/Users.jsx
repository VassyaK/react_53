import React from 'react';
import jss from 'jss';
import { NavLink } from 'react-router-dom';
import preset from 'jss-preset-default';

import styles from './styles';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Users() {
  // eslint-disable-next-line prefer-const
  let userItem = [
    {
      name: 'Yan',
      login: 'Yanzillius',
      url: '/Yanzillius',
    },
    {
      name: 'Anna',
      login: 'aateplyakovva',
      url: '/aateplyakovva',
    },
    {
      name: 'Alexandr',
      login: 'AlexandrKisel',
      url: '/AlexandrKisel',
    },
    {
      name: 'Anastasiya',
      login: 'anastasiyaShcherenkova',
      url: '/anastasiyaShcherenkova',
    },
    {
      name: 'Artem',
      login: 'ArtemShahov',
      url: '/ArtemShahov',
    },
    {
      name: 'Nataliya',
      login: 'Nataliya1984',
      url: '/Nataliya1984',
    },
    {
      name: 'Nazar',
      login: 'NazarMui',
      url: '/NazarMui ',
    },
    {
      name: 'Sergey',
      login: 'Sergey-Chernushevich',
      url: '/SergeyChernushevich ',
    },
    {
      name: 'Dmitriy',
      login: 'ShavelD',
      url: '/ShavelD',
    },
    {
      name: 'Vasiliy ',
      login: 'VassyaK',
      url: '/VassyaK ',
    },
    {
      name: 'Vladislav',
      login: 'Vladosinka',
      url: '/Vladosinka',
    },
  ];
  return (
    <div className={classes.users}>
      {userItem.map((user) => (
        <NavLink key={user.name} to={user.url}>
          {user.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Users;
