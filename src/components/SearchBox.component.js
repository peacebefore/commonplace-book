import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div``;

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <SearchBar>
      <input type='search' placeholder='Search' onChange={searchChange} />
    </SearchBar>
  );
};

export default SearchBox;
