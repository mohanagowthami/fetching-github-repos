import React from 'react'
import { StyledButton } from './styledComponents'
export default function CustomButton(props) {
    const { title, ...rest } = props
    return (
        <>
            <StyledButton  {...rest}>{title}</StyledButton>
        </>)
}