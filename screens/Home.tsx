import React from 'react'
import styled from 'styled-components'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
]

const Home = () => {
  return (
    <ViewContainer>
      <Transactions
        data={DATA}
        renderItem={({ item }) => (
          <Transaction>
            <TransactionDetails>{item.title}</TransactionDetails>
          </Transaction>
        )}
        keyExtractor={item => item.id}
      />
    </ViewContainer>
  )
}

const ViewContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight};
  background-color: #efefef;
  color: #333;
  padding: 8px;
`

const Transactions = styled.FlatList`
  font-size: 20;
  padding: 8px;
`
const Transaction = styled.View`
  background: white;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`
const TransactionDetails = styled.Text``

export default Home
