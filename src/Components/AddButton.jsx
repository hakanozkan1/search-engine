import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button` 
  width: 150px;
  height: 40px;
  background-color: #204080;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #4F75C2;
  }
`

const AddButton = () => {
  return (
    <Link to={'/add'} style={{ textDecoration: 'none', color: "black" }}>
      <Button>
        Add new record
    </Button>
    </Link>
  )      
    
    
}

export default AddButton