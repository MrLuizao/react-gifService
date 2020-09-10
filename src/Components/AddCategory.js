import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (evt) => {
        // console.log(evt.target.value)
        setInputValue(evt.target.value);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        if( inputValue.trim().length > 2){
            setcategories( items => [...items, inputValue] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
