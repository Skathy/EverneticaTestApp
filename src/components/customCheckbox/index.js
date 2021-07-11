import React from 'react'
import { Checkbox } from '@material-ui/core';
import './style.scss'

const CustomCheckbox = ({checked, onChange, style}) => {
    return (
        <div className='custom-checkbox-wrapper'>
            <Checkbox
                checked={checked} 
                onChange={onChange} 
                style={style}/>
        </div>
    )
}
export default CustomCheckbox