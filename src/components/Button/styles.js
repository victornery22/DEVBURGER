import styled from "styled-components";

export const ContainerButton = styled.button`
width: 100%;
height: 52px;
border: 0;
border-radius: 8px;
background: #9758a6;
font-family: "Road Rage", sans-serif;
font-size: 30px;
color: #fff;


&:hover {
    background: #6f357c;
    transition: background-color 0.3s ease;
    &:active {
        background: #5c2d67;
    }
}
`