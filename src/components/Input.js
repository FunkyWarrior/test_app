
import React from 'react';

export const Input = props => {
    const {el,className,changeInputValue} = props;
    return (
        <input
            className = {className}
            id={el.id}
            type={el.type}
            name={el.name}
            placeholder={el.placeholder}
            minLength={el.minLength}
            maxLength={el.maxLength}
            required={el.required}
            pattern={el.pattern}
            checked={el.checked}
            defaultChecked={el.defaultChecked}
            readOnly={el.readOnly}
            onChange={(e) => typeof changeInputValue === 'function' ? changeInputValue(e.target.value) : null}
        />
    );
};
export default Input;
