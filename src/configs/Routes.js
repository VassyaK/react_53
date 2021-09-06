import About from '../components/base/Side/About';
import Home from '../components/base/Side/Home';
import KanbanBoard from '../components/base/Side/KanbanBoard';
import Users from '../components/base/Side/Users/Users';

export default [
  {
    title: 'Home',
    url: '/Home',
    component: Home,
  },
  {
    title: 'Users',
    url: '/users',
    component: Users,
  },
  {
    title: 'About',
    url: '/about',
    component: About,
  },
  {
    title: 'KanbanBoard',
    url: '/kanbanBoard',
    component: KanbanBoard,
  },
];
