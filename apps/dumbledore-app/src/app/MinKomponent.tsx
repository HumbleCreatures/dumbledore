import { useState } from 'react';
import styled from 'styled-components';
import { Layout } from './layout';

const primaryColor = "#00ffff;";

const Wrapper = styled.div`
    background-color: #ff00ff;
    padding: 20px;
`

const UnderDiv = styled.div`
    background-color: ${primaryColor};
    padding: 10px;
`

export const MainLayout = ({children}:any) => {
    return <Wrapper>
        <UnderDiv>
            {children}
        </UnderDiv>
    </Wrapper>
}


export const MinKomponent = ({message}:{message: string}) => {
    const [komponentState, setKomponentState] = useState({ internalMessage: 'Start värdet'});
    
    const sakerIKoket = [
        {namn: "sked", antal: 5},
        {namn: "gaffel", antal: 10},
        {namn: "kniv", antal: 15},
        {namn: "koppar", antal: 51},
    ]

    const listan = [...sakerIKoket, ...sakerIKoket]
    .filter(item => item.antal > 10)
    .map((item, index) => {
        return <div key={index}>{item.namn} - {item.antal}</div>
    })

    return <MainLayout>
        <div>Props: {message}</div>
        <div>Inernt state: {komponentState.internalMessage}</div>
        {listan}
        <br/>
        Underkomponent:
        <MinUnderkomponent message={komponentState} ></MinUnderkomponent>
        

        <button onClick={() => {
            //komponentState.internalMessage = "Någon har tryckt på knappen"
            setKomponentState({ ...komponentState, internalMessage: "Ny ref"});
            }}>Klicka på mig</button>
        </MainLayout>
}

type input = {
    message: {
        internalMessage: string;
    }
}
export const MinUnderkomponent = (input: input) => {
    return <div>{input.message.internalMessage}</div>
}