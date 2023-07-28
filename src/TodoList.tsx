import TodoCard from './TodoCard';

interface Todo {
	num: number;
	todo: string;
}

interface Props {
	todos: Todo[];
	removeTodo: (id: number) => void;
}

const TodoList = ({todos, removeTodo}: Props) => {
	const removeTODO = (id: number) => {
		removeTodo(id);
	};

	return (
		<div className='pl-[4.5rem] space-y-4'>
			{todos.map((item) => (
				<TodoCard
					onCheck={() => removeTODO(item.num)}
					key={item.num}
					number={item.num}
					todo={item.todo}
				/>
			))}
		</div>
	);
};

export default TodoList;
