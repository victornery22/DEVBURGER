import { Banner, Container, Content, Title } from "./styles";
import Logo from "../../assets/logo-cart.svg";
import { CartItems, CartResume } from "../../components";
export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo-devburger" />
            </Banner>
            <Title>Chekout - Pedido</Title>
            <Content>
            <CartItems />
            <CartResume /> 
            </Content>
        </Container>
    )
}