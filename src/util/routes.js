import Home from '../pages/home/Home';
import Info from '../pages/info/Info';
import History from '../pages/history/History';
import Patron from '../pages/patron/Patron';
import Teachers from '../pages/teachers/Teachers';
import Availability from '../pages/availability/Availability';
import Library from '../pages/book/Library';
import SecureData from '../pages/securedata/SecureData';
import Recruit from '../pages/recruit/Recruit';
import Scholarship from '../pages/scholarship/Scholarship';
import SecureSchool from '../pages/secureschool/SecureSchool';
import SecureDigital from '../pages/securedigital/SecureDigital';
import ParentCouncil from '../pages/parentcouncil/ParentCouncil';
import ParentSubscription from '../pages/parentsubscription/ParentSubscription';
import AdviceForParent from '../pages/adviceforparent/AdviceForParent';
import AdvicePsychology from '../pages/advicepsychology/AdvicePsychology';
import AdviceLink from '../pages/advicelink/AdviceLink';
import Notices from '../pages/notices/Notices';
import Blogs from '../pages/blogs/Blogs';
import BlogPost from '../pages/blogpost/BlogPost';
import Documents from '../pages/documents/Documents';
import Covid from '../pages/covid/Covid';
import UeProject from '../pages/ueproject/UeProject';
import Preschools from '../pages/preschools/Preschools';
import Preschoolr from '../pages/preschoolr/Preschoolr';
import PreschoolrTimetable from '../pages/preschoolrtimetable/PreschoolrTimetable';
import PreschoolrRules from '../pages/preschoolrrules/PreschoolrRules';
import PreschoolrDocument from '../pages/preschoolrdocument/PreschoolrDocument';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
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
  {
    path: '/notices',
    component: Notices,
    name: 'Ogłoszenia',
  },
  {
    path: '/scholarship',
    component: Scholarship,
    name: 'Stypendia',
  },
  {
    path: '/secureschool',
    component: SecureSchool,
    name: 'Bezpieczna szkoła',
  },
  {
    path: '/securedigital',
    component: SecureDigital,
    name: 'Bezpieczeństwo cyfrowe',
  },
  {
    path: '/parentcouncil',
    component: ParentCouncil,
    name: 'Rada Rodziców',
  },
  {
    path: '/parentsubscription',
    component: ParentSubscription,
    name: 'Składka na Radę Rodziców',
  },
  {
    path: '/adviceforparent',
    component: AdviceForParent,
    name: 'Rady dla rodziców',
  },
  {
    path: '/advicepsychology',
    component: AdvicePsychology,
    name: 'Rady psychologa',
  },
  {
    path: '/advicelink',
    component: AdviceLink,
    name: 'Przydatne linki',
  },
  {
    path: '/documents',
    component: Documents,
    name: 'Dokumenty szkoły',
  },
  {
    path: '/securedata',
    component: SecureData,
    name: 'Ochrona danych',
  },
  {
    path: '/covid',
    component: Covid,
    name: 'Covid-19',
  },
  {
    path: '/ueproject',
    component: UeProject,
    name: 'Projekt UE',
  }, 
  {
    path: '/blogs',
    component: Blogs,
    name: 'Wydarzenia',
    exact: true
  },
  {
    path: '/blogs/:slug',
    component: BlogPost,
    name: 'Wydarzenia',
  },
  {
    path: '/preschools',
    component: Preschools,
    name: 'Przedszkola',
  },
  {
    path: '/preschoolr',
    component: Preschoolr,
    name: 'Przedszkola - Równia',
  },
  {
    path: '/preschoolrtimetable',
    component: PreschoolrTimetable,
    name: 'Rozkład dnia',
  },
  {
    path: '/preschoolrrules',
    component: PreschoolrRules,
    name: 'Zasady',
  },
  {
    path: '/preschoolrdocument',
    component: PreschoolrDocument,
    name: 'Documenty',
  }

];


export default routes;
