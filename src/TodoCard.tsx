import React from 'react';

interface Props {
	number: number;
	todo: string;
	onCheck: () => void;
}

const TodoCard = ({number, todo, onCheck}: Props) => {
	return (
		<div className='flex gap-3 w-[48rem] px-4 py-2 items-center justify-between group/todo hover:shadow hover:border-transparent rounded-md transition'>
			<div className='flex items-end gap-6'>
				<p className='group-hover/todo:text-yellow-500 font-mono text-yellow-500/50 text-3xl font-bold transition selection:bg-emerald-400'>
					{number}.
				</p>
				<p className='font-mono first-letter:capitalize text-[1.4rem] text-gray-800 selection:bg-emerald-200'>
					{todo}
				</p>
			</div>
			<button onClick={onCheck} className='text-lg transition active:scale-90'>
				✅
			</button>
		</div>
	);
};

export default TodoCard;
