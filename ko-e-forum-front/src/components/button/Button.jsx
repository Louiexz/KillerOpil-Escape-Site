import btn from './button.module.css';
import PropTypes from 'prop-types';

function Button(props) {
    // Define dynamic event handler attributes
    const eventHandler = props.event ? { [props.event]: props.funct } : {};
    const section = document.getElementById('Sign-in') 
    ? document.getElementById('Sign-in')
    : document.getElementById('Sign-up') || null;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <button className={btn.link} {...eventHandler}>
            <span>{props.text}</span>
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string, // Assuming text is a single string
    event: PropTypes.string, // The type of event handler (e.g., 'onClick')
    class: PropTypes.string, // Class style of the button
    funct: PropTypes.func,   // The event handler function
};

export default Button;
