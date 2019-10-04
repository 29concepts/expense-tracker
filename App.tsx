import React from 'react'
import styled from 'styled-components'

export default function App() {
  return (
    <ViewContainer>
      <Greeting>Nice!</Greeting>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  background-color: salmon;
  align-items: center;
  justify-content: center;
`
const Greeting = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: white;
`
