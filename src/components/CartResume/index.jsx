import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api }  from "../../services/api";
import {formatPrice} from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";


import { Container } from "./styles";
import { Button } from "../Button";

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500); //5 reais o delivery
    const { cartProducts, clearCart}= useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItems);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {id: product.id,  quantity: product.quantity, price: product.price}})
        
            try{
                const {data} = await api.post("/create-payment-intent", {products});
                navigate(`/checkout`, {state: data});
            }catch (err){
                toast.error("Erro, tente novamente!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            //O outro try catch salvei na area de trabalho 
    }

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Pagar Agora</Button>
        </div>
    );
}
