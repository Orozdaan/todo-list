import './App.css'
import Addtodo from './components/Addtodo/Addtodo/Addtodo.js'
import Todos from './components/Addtodo/Todos/Todos'
import { useState ,useEffect,useReducer} from 'react'

function App() {
	const [todos, setTodos] = useState([])

	const AddtodoHandler = (inputText) => {
		setTodos((prevState) => {
			let prevTodos = [...prevState]
			prevTodos.unshift({
				text: inputText,
				id: Math.random().toString(),
				completed: false,
				date: new Date().toLocaleDateString(),
			})
			return prevTodos
		})
	}

	// console.log(todos)

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data') )
    setTodos(localData || [])
  }, []);
  useEffect(()=>{
    localStorage.setItem('data' , JSON.stringify(todos))
  },[todos])
  
	return (
		<div className='App'>
			<h1 className='todo'>Todo Application</h1>
			<Addtodo onAddtodo={AddtodoHandler} />
			<Todos data={todos} setTodos={setTodos} />
		</div>
	)
}
export default App
