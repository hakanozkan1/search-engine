import React from 'react'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import ListItem from '../Components/ListItem'
import { useEffect, useState } from 'react'
import Pages from '../Components/Pages'
import styled from 'styled-components';
import logo from '../assets/tesodev.png'
import AddButton from '../Components/AddButton'

const Navbar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 0;
`;

const Image = styled.img`
  height: 100%;
  margin: 20px 0 20px 0;
`;

const Container = styled.div` 
  display: flex;
  width: 100%;
  justify-content: center;
`

const SearchContainer = styled.div`
  width: 60%;
  height: max-content;
  margin-top: 20px;
  padding: 10px 10px 10px 250px;
`;

const DropDownContainer = styled.div`
  width: 11.5em;
  margin: 20px 0 0 20px;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  background: #F3F2F2;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;
`;

const DropDownListContainer = styled.div`

`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const OptionItem = styled.li`
  list-style: none;
  margin-bottom: 0.5em;
  padding: 0.2em 0.2em 0.2em 1em;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #BABABA;
  }
`;

const options = ["Name ascending", "Name descending", "Year ascending", "Year descending"];

const List = () => {

  const input = useSelector((state) => state.input.value)
  const [results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const filteredResults = JSON.parse(localStorage.getItem('records')).data.filter((record) => record[0].toLowerCase().includes(input.toLowerCase()) && input !== "")
    if(selectedOption === "Name ascending" || selectedOption === null){

      return setResults(filteredResults.sort((a,b) => a[0].localeCompare(b[0])))

    }else if(selectedOption === "Name descending") {

      return setResults(filteredResults.sort((a,b) => b[0].localeCompare(a[0])))

    }else if(selectedOption === "Year ascending") {


      return setResults(filteredResults.sort((a,b) => {

        let YYYY = a[3].slice(6,10)
        let MM = a[3].slice(3,5)
        let DD = a[3].slice(0,2)
        let dateA = `${MM}/${DD}/${YYYY}`

        let YYYY2 = b[3].slice(6,10)
        let MM2 = b[3].slice(3,5)
        let DD2 = b[3].slice(0,2)
        let dateB = `${MM2}/${DD2}/${YYYY2}`
        
        return new Date(dateA) - new Date(dateB);
      }))
      

    }else if(selectedOption === "Year descending") {

      return setResults(filteredResults.sort((a,b) => {

        let YYYY = a[3].slice(6,10)
        let MM = a[3].slice(3,5)
        let DD = a[3].slice(0,2)
        let dateA = `${MM}/${DD}/${YYYY}`

        let YYYY2 = b[3].slice(6,10)
        let MM2 = b[3].slice(3,5)
        let DD2 = b[3].slice(0,2)
        let dateB = `${MM2}/${DD2}/${YYYY2}`
        
        return new Date(dateB) - new Date(dateA);
      }))
    }

  }, [input, selectedOption])

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar>
        <Image src={logo} />
        <Search />
        <AddButton />
      </Navbar>
      <Container>
        <SearchContainer>
        <ListItem results={currentResults} />
        <Pages
          resultsPerPage={resultsPerPage}
          totalPosts={results.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </SearchContainer>
      <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption || "Order By"}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map(option => (
                  <OptionItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </OptionItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Container>
    </div>
  )
}

export default List