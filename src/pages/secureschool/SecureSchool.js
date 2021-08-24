import Section from '../../styles/Section';
import Main from './Main'
import SidebarSecure from '../../components/SidebarSecure'
import Aside from '../../components/Aside';

const SecureSchool = () => {
  return (
    <Section>
      <SidebarSecure />
      <Main />
      <Aside />
    </Section>
  );
};


export default SecureSchool;
