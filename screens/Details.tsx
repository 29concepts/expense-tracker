import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as SVGText } from 'react-native-svg';
import Constants from 'expo-constants';

const transactions = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    date: 'Sep 9, 2019',
    amount: 80000,
    payment_method: 'UBL Transfer',
    category: 'Equipment',
    location: '',
    details: 'Laptop',
    notes: 'Reimbursed by the office',
    type: 'debit'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    date: 'Sep 17, 2019',
    amount: 2085,
    payment_method: 'UBL Card', // get this from the payment_methods table
    category: 'Food', // get this from the categories table
    location: 'AlFatah', // get this from the places table
    details: '3x Beanies Flavored Coffees',
    notes: "One Irish Cream flavored coffee was Danyal's BD gift",
    type: 'debit'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    date: 'Sep 11, 2019',
    amount: 5309,
    payment_method: 'Cash', // get this from the payment_methods table
    category: 'Gifts', // get this from the categories table
    location: 'Monark', // get this from the places table
    details: 'Monark (3x Polo shirts)',
    notes: 'Eid gifts for brothers',
    type: 'debit'
  },
  {
    id: '3a1234fc-c605-48d3-a4f8-fbd91aa97f63',
    date: 'Sep 07, 2019',
    amount: 3000,
    payment_method: 'Cash', // get this from the payment_methods table
    category: 'Food', // get this from the categories table
    location: 'Total Airport Road', // get this from the places table
    details: 'Petrol',
    notes: '',
    type: 'debit'
  },
  {
    id: '3ac68acc-c605-48d3-a4f8-fbd91aa97f63',
    date: 'Sep 13, 2019',
    amount: 971,
    payment_method: 'UBL Card', // get this from the payment_methods table
    category: 'Fitness', // get this from the categories table
    location: 'Mall of Defence', // get this from the places table
    details: 'Carrefour (gym shampoo, conditioner, body wash)',
    notes: '',
    type: 'debit'
  },
  {
    id: '3ac68adc-c605-48d3-a4f8-fbd91aa97f64',
    date: 'Sep 01, 2019',
    amount: 35000,
    payment_method: 'Bank deposit', // get this from the payment_methods table
    category: 'Salary', // get this from the categories table
    location: '', // get this from the places table
    details: 'Payment from Pushback Ltd.',
    notes: '',
    type: 'credit'
  }
];

const Details = () => {
  const [selectedSlice, updateSelectedSlice] = useState({
    label: transactions[0].category,
    value: transactions[0].amount,
    key: transactions[0].id
  });
  const [labelWidth, updatelabelWidth] = useState(0);

  //const keys = [...categories];
  const values = [15, 25, 35, 15, 55, 15, 10, 5, 55, 15, 10, 5, 5, 2, 3];
  const colors = [
    '#600080',
    '#9900cc',
    '#c61aff',
    '#d966ff',
    '#ecb3ff',
    '#601080',
    '#9910cc',
    '#c61a1f',
    '#d916ff',
    '#e1b3ff',
    '#9930cc',
    '#c41a1f',
    '#d914ff',
    '#e133ff'
  ];

  const sample_data = transactions.map((item, index) => {
    return {
      key: item.id,
      value: values[index],
      svg: { fill: colors[index] },
      arc: { outerRadius: '70%', padAngle: selectedSlice.key === item.id ? 0.1 : 0 },
      onPress: () => updateSelectedSlice({ label: item.category, value: item.amount, key: item.id })
    };
  });

  const { width, height } = Dimensions.get('window');

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <SVGText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          stroke={'black'}
          strokeWidth={0.2}
        >
          {data.amount}
        </SVGText>
      );
    });
  };
  return (
    <StyledView>
      <StyledPieChart
        outerRadius={'80%'}
        innerRadius={'30%'}
        data={sample_data}
        //labelRadius={'50px'}
        // valueAccessor={({ item }) => item.amount}
        spacing={0}
      >
        <Labels />
      </StyledPieChart>

      <PieLabel
        labelWidth={labelWidth}
        width={width}
        onLayout={({
          nativeEvent: {
            layout: { width }
          }
        }) => {
          updatelabelWidth(width);
        }}
      >
        {`${selectedSlice.label} \n ${selectedSlice.value}`}
      </PieLabel>

      <ViewContainer>
        <Transactions
          data={transactions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => updateSelectedSlice({ label: item.category, value: item.amount, key: item.id })}
            >
              <Transaction selected={selectedSlice.label === item.category ? 'aliceblue' : 'white'}>
                <TransactionCategory>{item.category}</TransactionCategory>
                <TransactionDetails>{item.notes}</TransactionDetails>
                <TransactionAmount>Rs. {item.amount}</TransactionAmount>
              </Transaction>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </ViewContainer>
    </StyledView>
  );
};

const StyledPieChart = styled(PieChart)`
  height: 400px;
`;

const StyledView = styled.View`
  justify-content: center;
  flex: 1;
`;

const PieLabel = styled.Text`
  position: absolute;
  left: ${props => props.width / 2 - props.labelWidth / 2};
  text-align: center;
  margin-top: 30px;
`;

const ViewContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight};
  background-color: #efefef;
  color: #333;
  padding: 8px;
`;

const Transactions = styled.FlatList`
  font-size: 20;
  padding: 8px;
`;
const Transaction = styled.View`
  background: ${props => props.selected};
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;
const TransactionCategory = styled.Text`
  font-size: 12;
  text-transform: uppercase;
  color: #ccc;
`;

const TransactionDetails = styled.Text``;
const TransactionAmount = styled.Text``;

export default Details;
