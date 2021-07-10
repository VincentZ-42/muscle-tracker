import PropTypes from 'prop-types';

// {} destructures prop input into variable we can use
// Else we would have to use prop.title
// App.js uses component Header, inputs values called..
//..props, which we input into our component functions
// Can use direct css style
const Header = ({ title }) => {

  return (
    <header className='center'>
      <h1>{title}</h1>
    </header>
  )
}

// If no prop is passed into Header component,
// Prop values will automatically use these defaults
Header.defaultProps = {
  title: 'Muscle Tracker',
};

// Forces the type of value of title to be string
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Can use CSS inline styling
// Use this with style={headingStyle}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header
