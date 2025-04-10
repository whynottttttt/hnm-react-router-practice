import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/whynottttttt/hnm-react-router-practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    return <Container className="product-detail-card">
        <Row>
            <Col xs={12} md={6} className='product-img'>
                <img src={product?.img} />
            </Col>
            <Col xs={12} md={6}>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                <div className="choice">
                    {product?.choice ? "Conscious choice" : ""}
                </div>
                {product && (
                    <Dropdown className="drop-down">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size?.length > 0 &&
                                product.size.map((item, index) => (
                                    <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                <Button variant="dark" className="add-button">
                    추가
                </Button>
            </Col>

        </Row>
    </Container>
}

export default ProductDetail