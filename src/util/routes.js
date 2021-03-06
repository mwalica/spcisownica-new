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
import PreschoolrBlogs from '../pages/preschoolrblogs/PreschoolrBlogs';
import PreschoolrBlogPost from '../pages/preschoolrblogpost/PreschoolrBlogPost';

import Preschoolc from '../pages/preschoolc/Preschoolc';
import PreschoolcBlogs from '../pages/preschoolcblogs/PreschoolcBlogs';
import PreschoolcBlogPost from '../pages/preschoolcblogpost/PreschoolcBlogPost';
import PreschoolcDocument from '../pages/preschoolcdocument/PreschoolcDocument';

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
    name: 'Patron szko??y',
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
    name: 'Deklaracja dost??pno??ci',
  },
  {
    path: '/recruit',
    component: Recruit,
    name: 'Nab??r',
  },
  {
    path: '/notices',
    component: Notices,
    name: 'Og??oszenia',
  },
  {
    path: '/scholarship',
    component: Scholarship,
    name: 'Stypendia',
  },
  {
    path: '/secureschool',
    component: SecureSchool,
    name: 'Bezpieczna szko??a',
  },
  {
    path: '/securedigital',
    component: SecureDigital,
    name: 'Bezpiecze??stwo cyfrowe',
  },
  {
    path: '/parentcouncil',
    component: ParentCouncil,
    name: 'Rada Rodzic??w',
  },
  {
    path: '/parentsubscription',
    component: ParentSubscription,
    name: 'Sk??adka na Rad?? Rodzic??w',
  },
  {
    path: '/adviceforparent',
    component: AdviceForParent,
    name: 'Rady dla rodzic??w',
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
    name: 'Dokumenty szko??y',
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
    exact: true,
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
    name: 'Przedszkole - R??wnia',
  },
  {
    path: '/preschoolrtimetable',
    component: PreschoolrTimetable,
    name: 'Rozk??ad dnia',
  },
  {
    path: '/preschoolrrules',
    component: PreschoolrRules,
    name: 'Zasady',
  },
  {
    path: '/preschoolrdocument',
    component: PreschoolrDocument,
    name: 'Dokumenty',
  },
  {
    path: '/preschoolrblogs',
    component: PreschoolrBlogs,
    name: 'Wydarzenia - przedszkole R??wnia',
    exact: true,
  },
  {
    path: '/preschoolrblogs/:slug',
    component: PreschoolrBlogPost,
    name: 'Wydarzenia',
  },
  {
    path: '/preschoolc',
    component: Preschoolc,
    name: 'Przedszkole - Cisownica',
  },
  {
    path: '/preschoolcblogs',
    component: PreschoolcBlogs,
    name: 'Wydarzenia - przedszkole Cisownica',
    exact: true,
  },
  {
    path: '/preschoolcblogs/:slug',
    component: PreschoolcBlogPost,
    name: 'Wydarzenia',
  },
  {
    path: '/preschoolcdocument',
    component: PreschoolcDocument,
    name: 'Dokumenty',
  }
];

export default routes;
