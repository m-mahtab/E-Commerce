
import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'

const Container = styled.div`

`
const PageContainer = styled.div`
  display: flex;
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  background-color:  #8AA7FF;

`
const FormContainer = styled.div`

flex: 1;
align-items: left ;
justify-content: center;
width: 70%;
margin: 20px;

`

const ImageContainer = styled.img`

flex: 1;
align-items: right ;
width: 30%;
margin: 20px;
height: 90%;

 
`
const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  margin-top: 90px;
  justify-content: center;
`
  
const Title = styled.h1`
font-size: 24px;
font-weight: 700;
color: #0000A3;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 20px;
  
`
const Agreements = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`
const Button = styled.button`
  padding: 10px 40px;
  background-color: #0000A3;
  color: white;
  cursor: pointer;
  border: none;
`

const Register = () => {
  return (
    <Container>
    <Announcements/>
      <PageContainer>
      
       
        <FormContainer>
      
          <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
              <Input placeholder = "First Name"/>
              <Input placeholder = "Last Name"/>
              <Input placeholder = "Username"/>
              <Input placeholder = "Email"/>
              <Input placeholder = "Password"/>
              <Input placeholder = "Confirm Password"/>

              <Agreements>
              By  Creating this account I agree to the <b>Terms and Policies</b></Agreements>
              
            </Form>
            <Button>CREATE</Button>
          </Wrapper>
          
        </FormContainer>
        <ImageContainer src = "../assets/images/image3.png" />

      </PageContainer>
    
      
    </Container>
  )
}

export default Register

