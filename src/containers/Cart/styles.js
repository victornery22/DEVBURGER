import styled from "styled-components";
import Texture from "../../assets/texture.svg"
import Background from "../../assets/background.svg"

export const Container = styled.div`
width: 100%;
background: 
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');

    min-height: 100vh;
`

export const Banner = styled.div`
background: url('${Texture}');
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 180px;

`

export const Title = styled.h2`
font-size: 32px;
color: #61a120;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;

&::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #61a120;
}`

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
gap: 40px;
padding: 40px;
width: 100%;
max-width: 1280px;
margin: 0 auto;`