import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get("q") || "";
        console.log("쿼리값은?", searchQuery);
        let url = `https://my-json-server.typicode.com/whynottttttt/hnm-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json();
        setProductList(data)
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div className="product-page">
            <Container className="product-container">
                <Row className="product-row">
                    {productList.map((menu, index) => (
                        <Col xs={12} sm={12} md={6} lg={3} key={index} className="product-col">
                            <div className="product-card-wrapper">
                                <ProductCard item={menu} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ProductAll;