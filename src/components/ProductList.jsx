import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const api_url = '';        //add url;

const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    margin: 20px;
    padding: 20px;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    
    h3 {
        margin: 10px 0;
    }

    p{
        margin  : 10px  0;
    }
`;

function ProductCard({ product }){
    return (
        <ProductCardStyles>
            <img src={product.imageUrl} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button> Add to Cart</button>
        </ProductCardStyles>
    );
}

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(api_url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return(
        <div>
            {products.map(product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}
 
export default ProductList;