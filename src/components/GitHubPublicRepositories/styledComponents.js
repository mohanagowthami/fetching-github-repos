import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../constant/breakPoints'

export const RepoContainer = styled.div`
margin-top:20px;
border:1px solid black;
padding:10px;
display:flex;
@media(${device.mobile})
{
    flex-direction:column;
}

`

export const RepoOwnerImage = styled.img`

width:30%;
height:auto;
@media(${device.mobile})
{
    width:100%;
}

`

export const Container = styled.div`
display:flex;
flex:1;
min-height:100vh;
justify-content:center;
align-items:center;

`

export const ReposWrapper = styled.div`

padding:20px;
`


export const RepoDetailsContainer = styled.div`
display:flex;
flex-direction:column;
margin:10px;
`

export const StyledLink = styled(Link)`
width:100%;
`