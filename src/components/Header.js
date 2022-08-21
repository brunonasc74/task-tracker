import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	const onClick = () => console.log('click');

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button onClick={onClick} color='green' text='Add' />
		</header>
	);
};

Header.defaultProps = {
	title: 'default title'
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;
