import { useState } from 'react/cjs/react.development'
import Card from '../UI/Card'
import './Todos.css'

const Todos = (props) => {
    

    const checkHandler=(event)=>{
        props.setTodos(props.data.map((el)=>{
            if(el.id === event.target.id){
                el.completed = !el.completed
            }
            return el
        }))

    }
	const deleteHandler = (event) => {
		props.setTodos(props.data.filter((el) => el.id != event.target.id))
	}
	return (
		<Card className='todo-items'>
			<ul>
				{props.data.map((todo) => {
					return (
						<Card className='todo-Li' key={todo.id}>
							<li id={todo.id} 
							className={`${todo.completed ? 'check' : ''}`}
								>
                                    	{todo.text}
							
								<span>{todo.date}</span>
							</li>
                            <input type='checkbox'
                            checked={todo.completed}
                            onChange={checkHandler}
                            id ={todo.id}
							/>
                            
							<button onClick={deleteHandler} id={todo.id}>
								Delete
							</button>
						</Card>
					)
				})}
			</ul>
		</Card>
	)
}
export default Todos
