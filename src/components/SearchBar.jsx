import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
position: sticky;
top: 0;
background-color: white;
z-index: 1;
display: flex;
justify-content: center; /* Center-align horizontally */
align-items: center; /* Center-align vertically */
padding: 10px;
`;

const SearchInput = styled.input`
    height: 50px;
    width: 1390px;
    align-items: center;
    padding: 10px;
    font-size: 18px;
    border: 2px solid #ccc;
    border-radius: 5px;
`;


function SearchBar({ onSearch }) {
    return (
        <SearchBarContainer>
            <SearchInput
                type="text"
                placeholder="Search products"
                onChange={e => onSearch(e.target.value)}
            />
        </SearchBarContainer>
    );
}

export default SearchBar;