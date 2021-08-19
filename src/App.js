import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import theme from './styles/theme';

import Header from './components/Header';

import routes from './util/routes';
import NoticesState from './context/notices/noticesState';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NoticesState>
        <Wrapper>
          <Header />
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              component={route.component}
              name={route.name}
            />
          ))}
        </Wrapper>
      </NoticesState>
    </ThemeProvider>
  );
};

const Wrapper = styled.div``;

export default App;
