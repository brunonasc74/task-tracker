import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'test1',
			appointment: 'lalala'
		},
		{
			id: 2,
			title: 'test2',
			appointment: 'lalala'
		},
		{
			id: 3,
			title: 'test3',
			appointment: 'lalala'
		}
	]);

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className='container'>
			<Header title='Task Tracker' />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				<p>No tasks pending</p>
			)}
		</div>
	);
}

export default App;
