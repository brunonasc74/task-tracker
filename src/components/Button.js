const Button = ({ color, text }) => {
	return (
		<button style={{ backgroundColor: color }} className='btn'>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'black',
	text: 'text'
};

export default Button;
