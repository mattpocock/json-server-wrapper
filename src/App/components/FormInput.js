import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
    name, title, value, handleChange,
}) => (
    <div
        style={{
            display: 'inline-block',
            padding: '15px',
        }}
    >
        <label
            htmlFor={name}
            style={{
                display: 'block',
                marginBottom: '5px',
            }}
        >
            {title}
        </label>
        <input
            type="text"
            onChange={handleChange}
            name={name}
            value={value}
        />
    </div>
);

FormInput.defaultProps = {
    title: '',
    value: '',
};

FormInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string,
};

module.exports = FormInput;
