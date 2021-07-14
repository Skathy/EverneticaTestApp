import React from 'react'
import { Checkbox } from '@material-ui/core';

const CustomCheckbox = ({checked, onChange, style}) => {
    return (
        <div className='custom-checkbox-wrapper'>
            <Checkbox
                onClick={e => e.preventDefault()}  // I HATE EVENT BUBBLING!
                checked={checked} 
                onChange={onChange} 
                style={style}/>
        </div>
    )
}
export default CustomCheckbox