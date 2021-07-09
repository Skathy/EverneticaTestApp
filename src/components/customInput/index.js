import React from 'react'
import { Input } from '@material-ui/core';
import './style.scss'

const CustomInput = ({onChange, placeholder, value}) => {
    return (
        <div className='custom-input-wrapper'>
            <Input
                className='input-field'
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    )
}

export default CustomInput