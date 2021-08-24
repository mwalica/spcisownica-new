import Section from '../../styles/Section';
import Main from './Main'
import SidebarInfo from '../../components/SidebarInfo'
import Aside from '../../components/Aside';

const Home = () => {
  return (
    <Section>
      <SidebarInfo />
      <Main />
      <Aside />
    </Section>
  );
};


export default Home;
