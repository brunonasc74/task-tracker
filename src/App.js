import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setState] = useState([
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

	return (
		<div className='container'>
			<Header title='Task Tracker' />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
