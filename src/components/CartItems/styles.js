import styled from "styled-components";

export const ProductImage = styled.img`
width: 80px;
height: 80px;
border-radius: 16px;`

export const ButtonGrup = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 16px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 30px;
    width: 30px; 
    font-size: 16px;    
    border-radius: 8px;
    border: none;
    color: #ffffff;
    background-color: #9758a6;
    transition: all 0.3s;

    &:hover {
        background-color: #6f357c;
    }
}`

export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`
export const TrashImage = styled.img`
width: 20px;
height: 20px;`
