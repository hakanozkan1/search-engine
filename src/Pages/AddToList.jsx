import { useState } from 'react'
import styled from 'styled-components';
import logo from '../assets/tesodev.png'
import Input from '../Components/Input';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = styled.div`
  height: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25%;
  grid-column-gap: 10px;
  margin: 10px 0 50px 0;
`;

const Image = styled.img`
  
`;

const Title = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
`

const H2 = styled.h2`
  margin-left: 10px;
`

const Container = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form` 
  width: 40%;
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div` 
  width: 100%;
  display: flex;
  justify-content: end;
`

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

const AddToList = () => {

  const [values, setValues] = useState({
    fullName: "",
    country: "",
    city: "",
    email: "",
  });

  const [validation, setValidation] = useState(false)

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Enter name and surname",
      errorMessage: "Name and surname should contain at least 2 words!",
      label: "Name Surname",
      pattern: "[a-zA-Z]{2,30}[ ]{1}[a-zA-Z+ ]{2,30}",
      required: true,
    },
    {
      id: 2,
      name: "country",
      type: "text",
      placeholder: "Enter a country",
      errorMessage: "It should be a country!",
      label: "Country",
      pattern: "[a-zA-Z+ ]{2,40}",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "Enter a city",
      errorMessage: "It should be a city!",
      label: "City",
      pattern: "[a-zA-Z+ ]{2,40}",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var retrievedObject = JSON.parse(localStorage.getItem('records'));
    retrievedObject.data.push([values.fullName,"Lorem Ipsum",values.email,new Date().toLocaleDateString(),values.country,values.city])
    localStorage.setItem('records', JSON.stringify(retrievedObject));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
    let fullNameVal = /([a-zA-Z]{2,30}[ ]{1}[a-zA-Z+ ]{2,30})/.test(values.fullName);
    let countryVal = /[a-zA-Z+ ]{2,40}/.test(values.country);
    let cityVal = /[a-zA-Z+ ]{2,40}/.test(values.city);
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/.test(values.email);

    if(fullNameVal && countryVal && cityVal && emailVal){
      setValidation(true)
    }else{
      setValidation(false)
    }
  };

  return (
    <div>
      <Navbar>
        <Image src={logo} />
        <Link to={'/list'} style={{ textDecoration: 'none', color: "black" }}>
        <Title>
            <AiOutlineArrowLeft size={40}/>
            <H2>Return to List Page</H2>
        </Title>
        </Link>
      </Navbar>
      <Container>
        <Form id="myForm" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        { validation &&
        <ButtonContainer>
          <Button>Submit</Button>
        </ButtonContainer>
        }

        </Form>
      </Container>
    </div>
  )
}

export default AddToList