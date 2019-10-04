import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const Settings = () => {
  return (
    <ViewContainer>
      <Greeting>Settings</Greeting>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  background-color: teal;
  align-items: center;
  justify-content: center;
`
const Greeting = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: white;
`

export default Settings
