import {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([{num: 1, todo: 'Take the dog out.'}]);

	const onTodoAdd = (data: any) => {
		setTodos([{todo: data, num: todos.length + 1}, ...todos]);
	};

	return (
		<div className='w-8/12 mx-auto flex flex-col gap-12 items-center py-8'>
			<p className='text-3xl text-emerald-400 text-center font-bold'>
				A{' '}
				<span className='text-yellow-500 underline decoration-wavy font-mono decoration-emerald-400 text-4xl'>
					TODO
				</span>{' '}
				List 🪶
			</p>
			<div className='flex flex-col gap-14 w-full'>
				<Form onAdd={(d) => onTodoAdd(d)} />
				<TodoList todos={todos} />
			</div>
		</div>
	);
}

export default App;
