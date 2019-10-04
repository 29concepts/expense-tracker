import React from 'react'
import styled from 'styled-components'
import Constants from 'expo-constants'
import data from '../sample_data.js'
import formatDate from '../helpers/date'

const Home = () => {
  return (
    <ViewContainer>
      <Transactions
        data={data.transactions}
        renderItem={({ item }) => (
          <Transaction type={item.type}>
            <TransactionCategory>{item.category}</TransactionCategory>
            <TransactionDetails>{item.details}</TransactionDetails>
            <TransactionDate>{formatDate(item.date)}</TransactionDate>
            <TransactionAmount>Rs. {item.amount}</TransactionAmount>
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
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  border-left-width: 5px;
  border-left-color: ${props =>
    props.type === 'credit' ? 'lightgreen' : 'salmon'};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`
const TransactionCategory = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: #ccc;
`
const TransactionDetails = styled.Text``
const TransactionAmount = styled.Text`
  font-size: 18px;
`
const TransactionDate = styled.Text``

export default Home
