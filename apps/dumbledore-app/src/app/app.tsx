import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { MinKomponent } from './MinKomponent';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <MinKomponent message="Välkommen från app!" />
    </StyledApp>
  );
}

/* Redux setup
<Provider store={store}>
</Provider>
*/
export default App;
