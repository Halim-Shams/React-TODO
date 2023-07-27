import {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {
	const todos = [
		{num: 1, todo: 'Take the dog out.'},
		{num: 2, todo: 'Let em pee.'},
		{num: 3, todo: 'Bring em back to house.'},
	];

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
				<Form />
				<TodoList todos={todos} />
			</div>
		</div>
	);
}

export default App;
