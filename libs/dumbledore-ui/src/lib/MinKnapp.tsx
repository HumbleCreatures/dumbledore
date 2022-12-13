import styled from 'styled-components';

const Knapp = styled.button `
    background-color: #00ffff;
    padding: 10px;
`

export const MinKnapp = ({label}:{label:string}) => {
    return <div>
        <label>{label}</label>
        <Knapp>Klicka på mig</Knapp>
    </div>
}