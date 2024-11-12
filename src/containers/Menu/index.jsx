import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton  } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { element } from "prop-types";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
   
    const navigate = useNavigate();
    
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get("categoria");
        if (categoryId) {
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            const newCategories = [{ id: 0, name: "Todos" }, ...data];

            setCategories(newCategories);
        }
        async function loadProducts() {
            const { data } = await api.get("/products");
            const newProducts = data.map(product => ({ currencyValue: formatPrice(product.price), ...product }));

            setProducts(newProducts);
        }
        loadProducts();
        loadCategories();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setfilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategory);
            setfilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    // Função para voltar à Home
    const AboltHome = () => {
        navigate('/');
    };

    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br /> { }
                    HAMBURGUER
                    <br /> { }
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            navigate({
                                pathname: "/cardapio",
                                search: `?categoria=${category.id}`,
                            },
                            {
                                replace: true
                            });
                            setActiveCategory(category.id);
                        }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}
