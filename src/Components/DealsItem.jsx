import React from 'react'
import styled from 'styled-components'
import { dealItems } from '../data'

const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  margin: 3px;
  object-fit: cover;
    
`
const Wrapper = styled.div`
  width: 100%;
  margin: 12px;

`
const Image = styled.img`
 
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  
  
`
const Info = styled.div`
  font-weight: bold;
`

const DealsItem = () => {
  return (
    <Container>
      {dealItems.map((item) => (

        <Wrapper key ={item.id} >
            
          <Image src = {item.Image} />
          <Info>{item.Desc}</Info>
              
          
        </Wrapper>
        ))
      }

    </Container>
  )
}

export default DealsItem