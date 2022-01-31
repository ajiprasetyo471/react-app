import PropsTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ background: color }} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropsTypes.string,
  text: PropsTypes.string.isRequired,
  onClick: PropsTypes.func,
};

export default Button;
