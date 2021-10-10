import React from 'react'
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion
        if( inputValue.trim().length >= 1) {
            setCategories(cate => [inputValue, ...cate]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired,
}
