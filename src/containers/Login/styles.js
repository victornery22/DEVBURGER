import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import BackgroundLogin from "../../assets/background-login.svg"
import Background from "../../assets/background.svg"


export const Container = styled.main`
display: flex;
width: 100vw;
height: 100vh;

`
export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;
height: 100%;
width: 100%;
max-width: 50%;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;
}
`
export const RightContainer = styled.div`
background: url('${Background}');
background-color: #1e1e1e;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
max-width: 50%;

p{
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 800;
}
    a{
       text-decoration: underline;
    }
`
export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: #FFFFFF;

span{
    font-family: "Road Rage", sans-serif;
    color: #9758A6;}
    
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 8px;
    padding: 0 16px;
}

    label {
        font-size: 18px;
        font-weight: 600;
        color: #FFF;
    }
    p{
        font-size: 12px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
    `
    export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #FFF;    
    `