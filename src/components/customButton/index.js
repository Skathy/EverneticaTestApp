import { React } from 'react';
import { Button } from '@material-ui/core';

const CustomButton = ({onClick, name, style}) => {
    return (
        <div className='custom-button-wrapper'>
            <Button onClick={onClick} style={style}>{name}</Button>
        </div>
    )
}

export default CustomButton