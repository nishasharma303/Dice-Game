import styled from "styled-components"

export const Button = styled.button`
    background-color: black;
    color: white;
    min-width: 220px;
    border-radius: 10px;
    padding: 10px 18px;
    border: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      background-color: #474646;
      transition: 0.3s background ease-in ;
    }
`

export const Outlinebutton = styled(Button)`
&:hover{
      background-color: #474646;
      transition: 0.3s background ease-in ;
    }
   
`