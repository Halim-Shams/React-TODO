import TodoCard from './TodoCard';

interface Todo {
	num: number;
	todo: string;
}

interface Props {
	todos: Todo[];
}

const TodoList = ({todos}: Props) => {
	return (
		<div className='px-20 space-y-4'>
			{todos.map((item) => (
				<TodoCard number={item.num} todo={item.todo} />
			))}
		</div>
	);
};

export default TodoList;
