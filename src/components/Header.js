import PropTypes from 'prop-types';
import Button from './ Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button text='Add' onClick={onClick} />
      <Button text='Delete' />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
const headingStyle = {
  color: 'gold',
  backgroundColor: 'green',
  padding: '15px',
  margin: '20px',
};

export default Header;
