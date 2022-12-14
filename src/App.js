import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

	// fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:3500/tasks');
		const data = await res.json();
		return data;
	};

	// fetch Task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:3500/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	// Delete Task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:3500/tasks/${id}`, { method: 'DELETE' });
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = async (id) => {
		const taskToggle = await fetchTask(id);
		const updTask = { ...taskToggle, reminder: !taskToggle.reminder };

		const res = await fetch(`http://localhost:3500/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(updTask)
		});
		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	// Add Task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:3500/tasks', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(task)
		});
		const data = await res.json();
		setTasks([...tasks, data]);
	};

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<p>No tasks pending</p>
			)}
		</div>
	);
}

export default App;
