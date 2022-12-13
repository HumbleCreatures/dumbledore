import { useState } from 'react';
type CaseInput = {
   title?: string
   description?: string 
}


export const CaseForm = () => {
    const [formState, setFormState] = useState<CaseInput>({title: 'Skriv din titel här'})

    const saveToServer = () => {
        console.log(formState);
    }

    return <div>
        <h1>Skapa case:</h1>
        <input value={formState.title} onChange={(e) => setFormState({...formState, title: e.target.value})}></input>
        <button onClick={saveToServer}>Spara</button>
    </div>
}