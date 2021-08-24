import Section from '../../styles/Section';
import Main from './Main'
import SidebarParent from '../../components/SidebarParent'
import Aside from '../../components/Aside';

const ParentSubscription = () => {
  return (
    <Section>
      <SidebarParent />
      <Main />
      <Aside />
    </Section>
  );
};


export default ParentSubscription;
