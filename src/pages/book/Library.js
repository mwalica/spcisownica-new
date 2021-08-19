import Section from '../../styles/Section';
import Main from './Main'
import SidebarLibrary from '../../components/SidebarLibrary'
import Aside from '../../components/Aside';

const Library = () => {
  return (
    <Section>
      <SidebarLibrary />
      <Main />
      <Aside />
    </Section>
  );
};


export default Library;
