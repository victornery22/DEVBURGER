import styled from "styled-components";

export const Container = styled.div`
.carousel-item {
    padding-right: 40px;
}
padding-left: 40px;
overflow-x: hidden;
.react-multi-carousel-list {
    overflow: visible;
}
.react-multiple-carousel__arrow--right {
    top: 10px
}
.react-multiple-carousel__arrow--left {
    top: 10px;
    left: 10px
}
`

export const Title = styled.h2`
font-size: 32px;
color: #61A120;
font-weight: 800;
padding-bottom: 12px;   
position: relative;
text-align: center;
margin: 70px 0;

&::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: #61A120;
}
`

