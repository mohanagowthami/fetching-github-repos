import styled from 'styled-components'
import { device } from '../../constant/breakPoints'

export const EachRepoContainer = styled.div`

display:flex;
flex-direction:column;
padding:20px;
`

export const ContributorsList = styled.div`
display:flex;
flex-wrap:wrap;
padding:10px;

`
export const ContributorImage = styled.img`
margin:10px;
width:100px;
height:100px;
border-radius:50px;
@media(${device.mobile})
{
width:50px;
height:50px;
border-radius:25px;
}
`