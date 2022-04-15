import React from 'react';
import styled from 'styled-components';

const Pagination = styled.ul` 
  display: flex;
  justify-content: center;
  padding: 0;
`

const PageItem = styled.li` 
  list-style: none;
`

const Button = styled.button` 
  margin: 5px;
  width: 35px;
  height: 35px;
  border: 1px solid #484848;
  border-radius: 5px;
  color:  ${props => props.active ? "black" : "white"};
  background-color: ${props => props.active ? "white" : "#204080"};
  cursor: pointer;
  
`

const Pages = ({ resultsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <Pagination>
        {pageNumbers.length >=3 && pageNumbers.map(number => (
          <PageItem key={number}>
            {number === currentPage ?
            <Button onClick={() => {paginate(number) }} href='/' >
            {number}
            </Button> 
            :
            <Button onClick={() => {paginate(number) }} href='/' active>
            {number}
            </Button>
            }
          </PageItem>
        ))}
      </Pagination>
  );
};

export default Pages;