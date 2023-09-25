import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {faker} from '@faker-js/faker';
import axios from 'axios'; 

const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 600px;
    border: 1px solid #ccc;
    margin: 20px;
    padding: 20px;

    img {
        width: 300px;
        height: 400px;
        object-fit: cover;
    }
    
    h3 {
        color: black;
        margin: 10px 0;
    }

    p{
        color: black;
        margin  : 10px  0;
    }
`;

function ProductCard({product}){
    return (
        <ProductCardStyles>
            <img src={faker.image.url()} alt={product.productName}/>
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>${product.price}</p>
            <button> Add to Cart</button>
        </ProductCardStyles>
    );
}

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fakeProducts = Array.from({ length: 10 }, () => ({
            id: faker.commerce.isbn,
            image: faker.image.url(),
            productName: faker.commerce.productName(),
            productDescription: faker.commerce.productDescription(),
            price: faker.commerce.price(),
        }));
        
        setProducts(fakeProducts);
    }, []);

    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {products.map (product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}
 
export default ProductList;