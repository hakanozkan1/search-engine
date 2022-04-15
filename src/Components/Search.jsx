import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputChange } from '../redux/input/inputSlice'
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  display: flex;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: #F0F0F0;
  }
`;

const Button = styled.button` 
  width: 150px;
  height: 40px;
  margin-left: 20px;
  background-color: #204080;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #4F75C2;
  }
`

const Search = () => {

  const dispatch = useDispatch()
  const input = useSelector((state) => state.input.value)

  return (
    <Container>
      <Input value={input} onChange={(e) => dispatch(inputChange(e.target.value))} />
            <Button>
                Search
            </Button>
    </Container>
            
    
  )
}

export default Search