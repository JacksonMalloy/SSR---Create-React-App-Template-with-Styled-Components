import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.main`
    display: grid;
    text-align: center;
`

export const Layout = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}
