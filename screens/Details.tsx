import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const Details = () => {
  return (
    <ViewContainer>
      <Greeting>Details</Greeting>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  background-color: plum;
  align-items: center;
  justify-content: center;
`
const Greeting = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: white;
`

export default Details
