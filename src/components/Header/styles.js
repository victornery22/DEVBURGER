import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
background-color: #1f1f1f;
width: 100%;
height: 72px;
`
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 1200px;
margin: 0 auto;
;`

export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 72px;

div{
    padding: 0 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    hr{
        height: 24px;
        border: 1px solid #625E5E;
    }
}
`

export const HeaderLink = styled(Link)`
color: ${props => props.$isActive ? "#9758a6" : "#fff"};
border-bottom: ${props => props.$isActive ? "2px solid #9758a6" : "none"};
text-decoration: none;
font-size: 22px;
transform: color 200ms;

&:hover {
    color: #9758a6;
    
}`

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 48px;
`

export const Profile = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
font-size: 20;

p{
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span{
        font-weight: 700;
        font-size: 18px;
        color: #9758a6;
    }
}`

export const Logout = styled.button`
color: #ff3205;
text-decoration: none;
font-weight: 700;
background-color: transparent;
border: none;
font-size: 16px;
`

export const LinkContainer = styled.div``

