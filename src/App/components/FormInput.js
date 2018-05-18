import React from 'react';

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

module.exports = FormInput;
