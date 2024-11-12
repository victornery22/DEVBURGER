import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title } from "./styles";
import { CardProduct } from "../CardProduct";
import { formatPrice } from "../../utils/formatPrice";

export function OffersCarousel() {

    const [offers, setOffers] = useState([])
    useEffect(() => {
        async function loadProducts() {
            const {data} = await api.get("/products")
            const onlyOffers = data.filter((product) => product.offer).map(product => ({currencyValue: formatPrice(product.price), ...product}))

            setOffers(onlyOffers)
        }
        loadProducts();
    }, []);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1080 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1080, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 690, min: 0 },
          items: 2
        }
      };

    return (
 
            <Container>
              <Title>OFERTAS DO DIA</Title>
              <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={true} 
                itemClass="carousel-item"
              >
                {offers.map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))}
              </Carousel>
            </Container>
    )
}