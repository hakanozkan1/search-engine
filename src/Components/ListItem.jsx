import styled from "styled-components";
import { VscLocation } from 'react-icons/vsc';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  
`;

const Icon = styled.div`
  margin-right: 10px;
`

const Desc = styled.div`
  
`

const P = styled.p`
  color:#8C8C8C;
  :nth-child(1){
    color: black
  }
`

const Record = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  :hover {
    background-color: #D8E0F0;
    cursor: pointer;
  }
`;

const Left = styled.div` 
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const Right = styled.div` 
  text-align: right;
  padding-right: 10px;
`

const Border = styled.div` 
  border: 0.1px solid #7E7E7E;
  margin: 0 10px 0 10px;
`


const ListItem = ({results}) => {


  return (
    <Container>
            {results.map((result) => (
              <Wrapper key={result[0]}>
                <Record>
                <Left>
                  <Icon>
                    <VscLocation size={40} />
                  </Icon>
                  <Desc>
                    <P>{result[2]}</P>
                    <P>{result[1]+", "+result[5]+", "+result[4]}</P>
                  </Desc>
                </Left>
                <Right>
                  <P>{result[0]}</P>
                  <P>{result[3]}</P>
                </Right>
              </Record>
              <Border />
              </Wrapper>  
            ))}
    </Container>
  )
}

export default ListItem