import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { MinKomponent } from './MinKomponent';
import { Provider } from 'react-redux';
import { store } from './store';
import { CaseForm } from './MyForms';
import { MainRouter } from './routes';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </StyledApp>
  );
}

export default App;
