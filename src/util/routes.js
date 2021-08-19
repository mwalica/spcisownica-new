import Info from '../pages/info/Info';
import History from '../pages/history/History';
import Patron from '../pages/patron/Patron';
import Teachers from '../pages/teachers/Teachers';
import Availability from '../pages/availability/Availability';
import Library from '../pages/book/Library';
import Recruit from '../pages/recruit/Recruit';

const routes = [
  {
    path: '/info',
    component: Info,
    name: 'O szkole',
  },
  {
    path: '/history',
    component: History,
    name: 'Historia',
  },
  {
    path: '/patron',
    component: Patron,
    name: 'Patron szkoły',
  },
  {
    path: '/teachers',
    component: Teachers,
    name: 'Nauczyciele',
  },
  {
    path: '/library',
    component: Library,
    name: 'Biblioteka',
  },
  {
    path: '/availability',
    component: Availability,
    name: 'Deklaracja dostępności',
  },
  {
    path: '/recruit',
    component: Recruit,
    name: 'Nabór',
  },

];



export default routes;