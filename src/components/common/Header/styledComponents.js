import styled from 'styled-components'
import { device } from '../../../constant/breakPoints'

export const Container = styled.div`

padding:30px;
border:1px solid orange;
display:flex;
flex-direction:row-reverse;

`
export const HambergerIcon = styled.img`
height:auto;
width:50px;

@media(${device.mobile})
{
    width:30px;
}

`