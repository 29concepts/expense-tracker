import React from 'react'
import styled from 'styled-components'
import { createAppContainer } from 'react-navigation' // this wraps the navigator
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './screens/Home'
import Details from './screens/Details'
import Settings from './screens/Settings'
import { AntDesign } from '@expo/vector-icons'

const App = () => {
  return <TabNavigator />
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

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="bars" size={24} color="black" />
        }
      },
      Details: {
        screen: Details,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="piechart" size={24} color="black" />
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarIcon: () => <AntDesign name="setting" size={24} color="black" />
        }
      }
    },
    {
      // Options
      defaultNavigationOptions: ({ navigation }) => ({})
    }
  )
)

export default App
