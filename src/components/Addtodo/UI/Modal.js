import Card from "./Card"
import './Modal.css'

const Modal = (props) =>{
    return(        
        <>
    <div onClick={props.onConfirm} className="backdrop" />

        <Card className='modal'>
        <header className='header'>
            <h2>{props.title}</h2>
        </header>
        <div className='content'>
            <p>{props.message}</p>
        </div>
        <footer className='actions'>
            <button onClick={props.onConfirm}>Okay</button>
            {props.children}
        </footer>
    </Card>
    </>


      
    )
}
export default Modal