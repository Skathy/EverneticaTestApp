import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: ${({direction}) => direction || 'column'};
    align-items: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'flex-start'};
    margin: ${({margin}) => margin || 0};
`
const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export default Flex;