import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import theme from './styles/theme';

import Header from './components/Header';
import Footer from './components/Footer';

import routes from './util/routes';

import NoticesState from './context/notices/noticesState';
import PostsState from './context/posts/postsState';
import PreschoolrPostsState from './context/preschoolrposts/preschoolrPostsState';
import PreschoolcPostsState from './context/preschoolcposts/preschoolcPostsState';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <NoticesState>
          <PostsState>
            <PreschoolrPostsState>
            <PreschoolcPostsState>
              <Header />
              <Switch>
                {routes.map((route, i) => (
                  <Route
                    path={route.path}
                    key={i}
                    component={route.component}
                    name={route.name}
                    exact={route.exact}
                  />
                ))}
              </Switch>
              <Footer />
              </PreschoolcPostsState>
            </PreschoolrPostsState>
          </PostsState>
        </NoticesState>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div``;

export default App;
