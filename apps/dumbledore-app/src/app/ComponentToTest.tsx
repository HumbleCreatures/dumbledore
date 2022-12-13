
export const ComponentToTest = ({message, clickAction}: {message?:string, clickAction?: (message:string) => void}) => {
    if(!message) {
        return <div><div>This is not the message you are looking for.</div></div>
    }
    return <div>
        Message:{message}
        <div><button onClick={() => clickAction && clickAction(message)}>Klicka på mig</button></div>
        </div>
}