import {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([{num: 1, todo: 'Take the dog out.'}]);

	const onTodoAdd = (data: any) => {
		setTodos([{todo: data, num: todos.length + 1}, ...todos]);
	};

	const onToDoCheck = () => {
		console.log('removed');
	};

	return (
		<div className='w-8/12 mx-auto flex flex-col gap-12 items-center py-8 relative'>
			<p className='text-3xl text-emerald-400 text-center font-bold'>
				A{' '}
				<span className='text-yellow-500 underline decoration-wavy font-mono decoration-emerald-400 text-4xl'>
					TODO
				</span>{' '}
				List
			</p>
			<div className='flex flex-col gap-14 w-full'>
				<Form onAdd={(d) => onTodoAdd(d)} />
				<TodoList
					removeTodo={(id) => setTodos(todos.filter((todo) => todo.num !== id))}
					todos={todos}
				/>
			</div>
			<p className='font-mono selection:bg-yellow-500 font-thin cursor-none hover:text-gray-800 text-gray-500 fixed text-sm bottom-4'>
				Developed with 🧠 by Halim Shams
			</p>
		</div>
	);
}

export default App;
