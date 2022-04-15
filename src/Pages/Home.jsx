import React from 'react'
import ListItem from '../Components/ListItem'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import records from '../mockData.json'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddButton from '../Components/AddButton'
import logo from '../assets/tesodev.png'

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Navbar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  margin: 20px 0 20px 0;
`;

const Header = styled.div`
  width: 50%;
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  width: 60%;
  border: 1px solid #BABABA;
  border-radius: 25px;
  margin-top: 20px;
  padding: 0 10px 0 10px;
`;

const ShowMore = styled.div`
  width: 100%;
  text-align: center;
  color: #204080;
  font-weight: bold;
  :hover {
    color: #4F75C2;
  }
`;



const Home = () => {

  const input = useSelector((state) => state.input.value)
  const [results, setResults] = useState([])

  localStorage.setItem('records', JSON.stringify(records));

  useEffect(() => {
    const filteredResults = JSON.parse(localStorage.getItem('records')).data.filter((record) => record[0].toLowerCase().includes(input.toLowerCase()) && input !== "")
    setResults(filteredResults.slice(0,3))
  }, [input])

  return (
    <Container>
      <Navbar>
        <AddButton />
      </Navbar>
      <Image src={logo} />
        <Header>
          Find in records
        </Header>
        <Search />
        {results.length >0 && 
        <SearchContainer>
        <ListItem results={results} />
        {results.length >=3 && 
        <Link to={'/list'} style={{ textDecoration: 'none', color: "black" }}>
              <ShowMore>
                <h3>Show more...</h3>
              </ShowMore>
              </Link>
        }
        </SearchContainer>}
      
    </Container>
    
  )
}

export default Home