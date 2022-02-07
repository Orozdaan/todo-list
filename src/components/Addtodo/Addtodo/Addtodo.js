import {useReducer } from 'react'
import Card from '../UI/Card'
import './Addtodo.css'
import Modal from '../UI/Modal'
   
const todoReducer = (state, action) => {
	if (action.type === 'INPUT_TASK') {
		return {
			value: action.value,
			isValid: null,
		}
	}
	if (action.type === 'MODAL_TODO') {
		return {
			value: state.value,
			isValid: {
				title: 'Invalid input',
				message: 'please enter a valid name age (non empty  valuse)',
			},
		}
	}
	if (action.type === 'MODAL_OK') {
		return {
			value: '',
			isValid: null,
		}
	}
	return {
		value: '',
		isValid: null,
	}
}

const Addtodo = (props) => {
	const [todostate, dispatchTask] = useReducer(todoReducer,{
		value:'',
		isValid:null
	})
	// const [isValid, setIsValid] = useState(true)

	const inputValueHadler = (event) => {
	         dispatchTask({type:'INPUT_TASK',value:event.target.value})
		}
		const submitHandler = (event) => {
			event.preventDefault()
			if (todostate.value.trim().length === 0) {
				dispatchTask({type:'MODAL_TODO'})
				return
			}
			console.log(todostate.value);
			props.onAddtodo(todostate.value)
		}
		
	
	// return setInputValue('')
	// console.log(inputValue);
	
	const errorHandler=()=>{
        dispatchTask({type:'MODAL_OK'})
	}

	return (
		<div>
			{todostate.isValid && (
				<Modal title={todostate.isValid.title}message={todostate.isValid.message}onConfirm={errorHandler}/>
			)}
		<Card className='todos' >
			<input type='text'  placeholder='Enter Something here'  onChange={inputValueHadler} />
			<button type='submit' onClick={submitHandler}>
				Add
			</button>
		</Card>
		</div>
		
	)
			}
export default Addtodo
