import PropTypes from 'prop-types';

// Same thing as Header
// We destructure the input given from App.js of
// color and text so we can use it as variables
// in our button componeent
const Button = ({ color, text, onClick }) => {
  
  return (
    <div>
      <button 
        onClick={onClick}
        style={{ backgroundColor: color}}
        className='btn'>
        {text}
      </button>
    </div>
  )
}

// If color of button is not given, then we use
// this as background color
Button.defaultProps = {
  color: 'steelblue',
};

// text input into button is expecte to be string
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button
