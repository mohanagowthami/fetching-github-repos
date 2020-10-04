import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, HambergerIcon } from './styledComponents'
export default function Header() {

    const history = useHistory()

    const handleClick = () => {
        history.push("/favorties")
    }


    return (
        <>
            <Container>
                <HambergerIcon src="https://www.freeiconspng.com/thumbs/favorites-icon-png/favorites-star-icon-png-0.png" onClick={handleClick} />
            </Container>
        </>)
}