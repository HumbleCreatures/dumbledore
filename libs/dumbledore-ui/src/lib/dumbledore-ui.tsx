import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DumbledoreUiProps {}

const StyledDumbledoreUi = styled.div`
  color: pink;
`;

export function DumbledoreUi(props: DumbledoreUiProps) {
  return (
    <StyledDumbledoreUi>
      <h1>Welcome to DumbledoreUi!</h1>
    </StyledDumbledoreUi>
  );
}

export default DumbledoreUi;
