import React, {useRef} from 'react';

const Form = () => {
	const searchRef = useRef<any>(null);

	const generate = (e: any) => {
		e.preventDefault();
		console.log(searchRef.current.value);
	};

	return (
		<form className='flex gap-3 mt-4 w-full items-center justify-center'>
			<input
				ref={searchRef}
				type='text'
				className='outline-none border py-2 px-5 w-9/12 rounded-md text-2xl font-mono focus:border-yellow-500'
				placeholder='Grab the milk...'
			/>
			<button
				onClick={generate}
				className='bg-emerald-400/80 px-6 py-2 rounded-md font-mono text-2xl text-white font-bold hover:bg-emerald-400 active:bg-emerald-500'>
				Add
			</button>
		</form>
	);
};

export default Form;
