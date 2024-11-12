import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding-left: 40px;
.carousel-item {
    padding-right: 40px;
}
.react-multiple-carousel__arrow--right {
    top: 10px
    
}
.react-multiple-carousel__arrow--left {
    top: 10px;
    left: 10px
}`

export const Title = styled.h2`
font-size: 32px;
color: #9758a6;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;


&::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: #9758a6;
}
`

export const ContainerItens = styled.div`
background: url('${(props) => props.$imageUrl}');
background-position: center;
background-size: cover;
display: flex;
align-items: center;
padding:20px 10px;
width: 100%;
height: 250px;
border-radius: 20px;

`
export const CategoryButton = styled(Link)`
color: #FFF;
    font-size: 22.5px;
    font-weight: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    margin-top: 150px;
    text-decoration: none;

    &:hover {
        background-color: #9758a6;
    }

`