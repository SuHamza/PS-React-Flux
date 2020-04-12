import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
    // Default CSS class
    let wrapperClass = 'form-group';
    // Add 'has-error' class in case of errors
    if (props.error.length > 0) {
        wrapperClass += ' has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className='field'>
                <input
                    id={props.id}
                    type="text"
                    onChange={props.onChange}
                    name={props.name}
                    className="form-control"
                    value={props.value}
                />
            </div>
            {/* The code on the right will run only if the condition on the left is true */}
            {props.error && <div className='alert alert-danger'>{props.error}</div>}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};
// Default error propType
TextInput.defaultProps = {
    error: ''
};
export default TextInput;