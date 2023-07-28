import React, {useRef, useState} from 'react';

interface Props {
	onAdd: (Data: string) => void;
}

const funTodos = [
	'Grab the milk',
	'Take the dog out',
	'Wash the dishes',
	'Watch an Episode',
	'Watch a movie',
	'Go for a walk',
	'Meet my grandparents',
	'Read the book',
	'Write something down',
	'Publish a video',
	'Code',
	'Prayer',
	'Meditation',
	'Go to GYM',
	'Take the vitamins',
	'Take Creatine',
	'Take Protien',
	'Drink water',
	'Go for a juggle',
	'Nap',
	'Go to bed',
	'Brush teeth',
	'Cold shower',
];

const Form = ({onAdd}: Props) => {
	const randomNumber = Math.trunc(Math.random() * funTodos.length);
	const randomPlaceholder = `${funTodos[randomNumber]}...`;

	const todoRef = useRef<any>(null);
	const [placeholder, setPlaceholder] = useState(randomPlaceholder);

	const add = (e: any) => {
		e.preventDefault();
		onAdd(todoRef.current.value);
		todoRef.current.value = '';
		setPlaceholder(randomPlaceholder);
	};

	return (
		<form className='flex gap-3 mt-4 w-full items-center justify-center'>
			<input
				autoFocus
				ref={todoRef}
				type='text'
				className='outline-none border py-2 px-5 w-9/12 rounded-md text-2xl font-mono focus:border-yellow-500'
				placeholder={placeholder}
			/>
			<button
				onClick={add}
				className='bg-emerald-400/80 px-6 py-2 rounded-md font-mono text-2xl text-white font-bold hover:bg-emerald-400 active:bg-emerald-500'>
				Add
			</button>
		</form>
	);
};

export default Form;
