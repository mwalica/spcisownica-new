import Section from '../../styles/Section';
import Main from './Main'
import SidebarHome from '../../components/SidebarHome'
import Aside from '../../components/Aside';

const Home = () => {
  return (
    <Section>
      <SidebarHome />
      <Main />
      <Aside />
    </Section>
  );
};


export default Home;
