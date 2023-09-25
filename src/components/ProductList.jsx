import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {faker} from '@faker-js/faker';
import axios from 'axios'; 
import SearchBar from './SearchBar';
import Filter from './Filter';
import WishlistIcon from './WishlistIcon';

const ProductCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 400px;
    border: 1px solid #ccc;
    margin: 20px;
    padding: 20px;
    position: relative; 

    &:hover::before {
        content: 'View Product';
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        opacity: 0; /* Initially hidden */
        transition: opacity 0.2s ease-in-out;
    }

    
    &:hover::before {
        opacity: 1; /* Display "View" text on hover */
    }

    img {
        width: 200px;
        height: 200px;
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

    .heart-icon {
        position: absolute;
        top: 20px; 
        right: 25px; 
        font-size: 24px;
        justify-content: right;
        align-items: right;
        cursor: pointer;
        color: #ccc;
        transition: color 0.2s ease-in-out;
    }

    .heart-icon.active {
        color: red; 
    }
`;

function ProductCard({product}){
    return (
        <ProductCardStyles>
            <img src={faker.image.url()} alt={product.productName}/>
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>${product.price}</p>
            <WishlistIcon /> {/* Include the WishlistIcon component */}
            <button> Add to Cart</button>
        </ProductCardStyles>
    );
}

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ cost: '', color: '' });


    useEffect(() => {
        const fakeProducts = Array.from({ length: 10 }, () => ({
            id: faker.commerce.isbn,
            image: faker.image.url(),
            productName: faker.commerce.productName(),
            productDescription: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            color: faker.color.cmyk(),
        }));
        
        setProducts(fakeProducts);
    }, []);

    const filteredProducts = products
        .filter(product => {
            const productName = product.productName.toLowerCase();
            return productName.includes(searchQuery.toLowerCase());
        })
        .filter(product => {
            if (filters.cost === '') return true;
            if (filters.cost === 'low') return parseFloat(product.price) < 50;
            if (filters.cost === 'medium') return parseFloat(product.price) >= 50 && parseFloat(product.price) <= 100;
            if (filters.cost === 'high') return parseFloat(product.price) > 100;
            return true;
        })
        .filter(product => {
            if (filters.color === '') return true;
            return product.color === filters.color.toLowerCase();
        });

    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <SearchBar onSearch={setSearchQuery} />
            <Filter onFilter={setFilters} />
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}
 
export default ProductList;