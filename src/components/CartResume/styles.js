import styled from "styled-components"
export const Container = styled.div`
background-color: #fff;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;

*{
    color: #484848;
    font-weight: 500;
}
.container-top{
    display: grid;
    grid-gap: 20px 30%;
    width: 100%;
    grid-template-areas:
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price'
    ;

    .title{grid-area: title;
        font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: #484848;
    color: #fff;
      ;
      display: flex;
      align-items: center;
      justify-content: center;
    padding: 11px;
    text-align: center;
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    
    }

    .items{grid-area: items;
    padding-left: 20px;}
    .items-price{grid-area: items-price;
        padding-right: 20px;}
    .delivery-tax{grid-area: delivery-tax;
        padding-left: 20px;}
    .delivery-tax-price{grid-area: delivery-tax-price;
        padding-right: 20px;}
    }
    .container-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bold;
        margin-top: 24px;
        *{
            font-weight: 700;
        }
    }


`
    