import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <div className="card" onClick={showDetail}>
            <CardContainer>
                <img src={item?.img} alt={item?.title} />
                <div className="product-info">
                    {item?.choice && <div className="product-choice">choice</div>}
                    <div className="product-title">{item?.title}</div>
                    <div className="product-price">{item?.price}</div>
                    {item?.new && <div className="product-new">신제품</div>}
                </div>
            </CardContainer>
        </div>
    )
}

const CardContainer = styled.div`
    transition: transform 0.3s ease;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
    
    &:hover {
        transform: scale(1.05);
    }
    
    img {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .product-info {
        padding: 8px 0;
    }
    
    .product-choice {
        font-weight: bold;
        color: #555;
        margin-bottom: 4px;
    }
    
    .product-title {
        font-size: 16px;
        margin-bottom: 4px;
    }
    
    .product-price {
        font-weight: bold;
        margin-bottom: 4px;
    }
    
    .product-new {
        color: #e4002b;
        font-size: 14px;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
        
        .product-info {
            padding: 10px 0;
        }
        
        .product-title {
            font-size: 18px;
        }
        
        .product-price {
            font-size: 16px;
        }
    }
`

export default ProductCard