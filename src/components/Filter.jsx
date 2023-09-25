
import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    background-color: white;
    width:150px;
    height: 300px;
    padding: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 22px;
    margin-right: 50px;
    margin-left: 50px;
`;

const FilterLabel = styled.label`
    font-weight: bold;
    margin-right: 10px;
`;

function Filter({ onFilter }) {
    const handleCostFilterChange = (e) => {
        onFilter({ cost: e.target.value });
    };

    const handleColorFilterChange = (e) => {
        onFilter({ color: e.target.value });
    };

    return (
        <FilterContainer>
            <FilterLabel>Filter by Cost:</FilterLabel>
            <select onChange={handleCostFilterChange}>
                <option value="">All</option>
                <option value="low">less than 50</option>
                <option value="medium">50-100</option>
                <option value="high">greater than 100</option>
            </select>

            <FilterLabel>Filter by Color:</FilterLabel>
            <select onChange={handleColorFilterChange}>
                <option value="">All</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </FilterContainer>
    );
}

export default Filter;
