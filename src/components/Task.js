import { FaTimes } from 'react-icons/fa';
import React from 'react';

const Task = ({ task, onDelete }) => {
	return (
		<div className='task'>
			<h3>
				{task.title}{' '}
				<FaTimes
					style={{ color: '#fa3030', cursor: 'pointer' }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.appointment}</p>
		</div>
	);
};

export default Task;
