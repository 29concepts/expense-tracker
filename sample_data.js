const data = {
  payment_methods: [
    {
      id: 12, // auto-generated
      name: 'Online Transfer', // required
      bank: 'UBL' // optional
    },
    {
      name: 'Cash',
      bank: ''
    },
    {
      type: 'Online Banking',
      name: 'Bank Transfer',
      bank: 'SCB'
    },
    {
      type: 'Card',
      name: 'UBL Visa Debit',
      bank: 'UBL' // figure out what Visa/MasterCard based on the card number
    },
    {
      type: 'App',
      name: 'UBL Digital',
      bank: 'UBL'
    }
  ],
  categories: [
    'Food',
    'Petrol',
    'Equipment',
    'Gifts',
    'Groceries',
    'Office',
    'Health',
    'Grooming',
    'Utilities',
    'Car',
    'Misc.',
    'Fitness',
    'Leisure',
    'Social'
  ],
  places: [
    {
      name: 'A Piece of Cake', // e.g. you ate at APOC six times this month
      nick: 'APOC',
      location: 'Sector X, Phase 3, DHA'
    },
    {
      name: 'The Pantry',
      nick: '',
      location: 'Packages Mall, Lahore'
    }
  ],
  transactions: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      date: '2019-09-09T11:53:05',
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
      date: '2019-09-17T11:53:05', // ISO 8601 date time string
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
      date: '2019-09-11T11:53:05',
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
      date: '2019-09-07T11:53:05',
      amount: 3000,
      payment_method: 'Cash', // get this from the payment_methods table
      category: 'Car', // get this from the categories table
      location: 'Total Airport Road', // get this from the places table
      details: 'Petrol',
      notes: '',
      type: 'debit'
    },
    {
      id: '3ac68acc-c605-48d3-a4f8-fbd91aa97f63',
      date: '2019-09-13T11:53:05',
      amount: 971,
      payment_method: 'UBL Card', // get this from the payment_methods table
      category: 'Fitness', // get this from the categories table
      location: 'Mall of Defence', // get this from the places table
      details: 'Carrefour (gym shampoo, conditioner, body wash)',
      notes: '',
      type: 'debit'
    },
    {
      id: '3ac68adc-c605-48d3-a4f8-fbd91aa97f63',
      date: '2019-09-01T11:53:05',
      amount: 35000,
      payment_method: 'Bank deposit', // get this from the payment_methods table
      category: 'Salary', // get this from the categories table
      location: '', // get this from the places table
      details: 'Payment from Pushback Ltd.',
      notes: '',
      type: 'credit'
    },
    {
      id: '3ac68adc-c605-48d3-1234-fbd91aa97f63',
      date: '2019-09-05T11:53:05',
      amount: 15000,
      payment_method: 'Xero', // get this from the payment_methods table
      category: 'Payment', // get this from the categories table
      location: '', // get this from the places table
      details: 'Payment from RBY',
      notes: '',
      type: 'credit'
    }
  ]
}

/*
IDEAS:

- Smart budgets: let user set and see budget. e.g. you have spent 80% of your food budget this month. You can spend Rs. 2300 more on food.


OTHERS:
- https://play.google.com/store/apps/details?id=com.cleevio.spendee
*/

export default data
