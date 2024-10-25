import PropTypes from 'prop-types';

function text(props) {
    // Define dynamic event handler attribute

    return (
        <>
            {props.name && <h4>O opil vai te pegar {props.name}</h4>}
            {!props.name && <h4></h4>}
        </>
    );
}

text.propTypes = {
    name: PropTypes.string, // Assuming text is a single string
};

export default text;
