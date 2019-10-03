data: [
	payment_methods = [
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

	categories = [
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

	places = [
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

	transactions = [
		{
			date: 'Sep 9, 2019',
			amount:	80000,
			payment_method:	'UBL Transfer',
			category:	'Equipment',
			location: '',
			details: 'Laptop',
			notes: 'Reimbursed by the office'
		},
		{
		 	date: 'Sep 17, 2019',
		 	amount: 2085,
		 	payment_method:	'UBL Card', // get this from the payment_methods table
		 	category: 'Food', // get this from the categories table
		 	location:	'AlFatah', // get this from the places table
		 	details: '3x Beanies Flavored Coffees',
		 	notes: 'One Irish Cream flavored coffee was Danyal\'s BD gift'
		 }
	]
]

/*
IDEAS:

- Smart budgets: let user set and see budget. e.g. you have spent 80% of your food budget this month. You can spend Rs. 2300 more on food.


OTHERS:
- https://play.google.com/store/apps/details?id=com.cleevio.spendee
*/