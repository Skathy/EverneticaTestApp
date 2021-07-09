import { React } from 'react';
import { Button } from '@material-ui/core';

const CustomButton = ({onClick, name}) => {
    return (
        <div className='custom-button-wrapper'>
            <Button onClick={onClick}>{name}</Button>
        </div>
    )
}

export default CustomButton