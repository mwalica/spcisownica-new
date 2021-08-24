import Section from '../../styles/Section';
import Main from './Main'
import SidebarParent from '../../components/SidebarParent'
import Aside from '../../components/Aside';

const ParentCouncil = () => {
  return (
    <Section>
      <SidebarParent />
      <Main />
      <Aside />
    </Section>
  );
};


export default ParentCouncil;
