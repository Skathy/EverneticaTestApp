import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    align-item: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'center'};
    margin: ${({margin}) => margin || 0};
    margin-top: 5rem;
`
const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export default Flex;