import React from 'react'
import { Input } from '@material-ui/core';

const CustomInput = ({onChange, placeholder, value}) => {
    return (
        <div className='custom-input-wrapper'>
            <Input
                value={value}
                className='input-field'
                placeholder={placeholder}
                onChange={onChange}
                style={{padding: '0.4rem',fontSize: '1.5rem'}} 
            />
        </div>
    )
}

export default CustomInput