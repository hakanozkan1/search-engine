import { useState } from "react";
import styled from 'styled-components';

const FormInput = styled.div`
    display: flex;
    flex-direction: column;
`

const Span = styled.span`
    margin-bottom: 10px;
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
`

const Label = styled.label`
    font-size: 16px;
    color: black;
    font-weight: bold;
    
`

const InputItem = styled.input`
padding: 12px;
margin: 15px 0px;
border-radius: 5px;
border: 1px solid gray;
:hover {
    background-color: #F0F0F0;
}
:focus{
    outline: none;
}
:invalid ~ ${Label}{
    color: ${props => props.focused === "true" ? "red" : "black"}
}
:invalid {
    border: ${props => props.focused === "true" ? "1px solid red" : "1px solid gray"}
}
:invalid ~ ${Span}{
    display: ${props => props.focused === "true" ? "block" : "none"}
}
`

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };



  return (
    <FormInput>
        <Label>{label}</Label>
        <InputItem
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />
      <Span>{errorMessage}</Span>
    </FormInput>
    
  );
};

export default Input;