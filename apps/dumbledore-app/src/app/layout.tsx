import styled from 'styled-components';
const Wrapper = styled.div`
    background-color: #ff0000;
`;

export const Layout = ({children}:{children: JSX.Element | JSX.Element[];}) => {
    return <Wrapper>{children}</Wrapper>
};