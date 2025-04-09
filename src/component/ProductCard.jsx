import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)

    }
    return (
        <div className="card" onClick={showDetail}>
            <CardContainer>
                <img src={item?.img} />
                <div>{item?.choice == true ? "choice" : ""}</div>
                <div>{item?.title}</div>
                <div>{item?.price}</div>
                <div>{item?.new == true ? "신제품" : ""}</div>
            </CardContainer >
        </div>

    )
}

const CardContainer = styled.div`
    transition: transform 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }
    
    img {
        width: 100%;
        height: auto;
    }
`

export default ProductCard