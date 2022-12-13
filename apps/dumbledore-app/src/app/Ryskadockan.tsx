import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addMyCase } from './caseSlice';
import { useAppSelector, useAppDispatch } from './store';
type Case = {
    title: string;
    message: string;
}
type DockState = {
    user: {
        username: string;
        age: number;
    },
    cases: Case[]
}

const InputFiled = () => {
    return <div>
        <label>Label</label>
        <input></input>
    </div>
}

const CreateCaseForm = ({onAddCase}:{onAddCase: (caseToAdd: Case) => void}) => {
    const dispatch = useAppDispatch();
    return <form>
        <input></input>
        <button onClick={() => {
            dispatch(addMyCase({title:'title', description: 'description'}))}
            }></button>
    </form>
}

const CaseView = () => {
    const cases = useAppSelector(state => state.mycase.cases)
    const caseList = cases.map((item) => {return <li>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        </li>})

        return <div>
            <ul>{caseList}</ul>
        </div>

}

export const RyskaDockan = () => {
    const [dockState, setDockState] = useState<DockState>({
        user: { username: 'Emil', age: 42},
        cases: []
    })

    return <div>
        <CaseView ></CaseView>
    </div>
}

