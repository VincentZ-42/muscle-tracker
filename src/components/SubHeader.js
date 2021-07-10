import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const SubHeader = ({ title, onAdd, show }) => {
  const location = useLocation();
  
  return (
    <header className='header'>
      <h2>{title}</h2>
      {location.pathname === '/' && (<Button 
        color={show ? 'red' : 'green'} 
        text={show ? 'Close' : 'Add'} 
        onClick={onAdd} />)}
    </header>
  )
}

SubHeader.defaultProps = {
  title: 'Workout Routine',
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader
