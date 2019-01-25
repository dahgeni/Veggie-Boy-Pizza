import React from 'react'
import PropTypes from "prop-types";


function InputGroup({
    name,
    label,
    type,
    placeholder,
    onChange,
    value
}) {
    return (
        <div className="form-group">
            {label && <label htmlFor= {name}>{label}</label>}
            <input
                className="form-control"
                required 
                name= {name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange= {onChange}
            />
        </div>  
    )
}

InputGroup.defaultProps = {
    type: "text"
}
InputGroup.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
    rows: PropTypes.string
};

export default InputGroup;
