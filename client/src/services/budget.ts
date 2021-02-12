const expenseCategories = [
    {
       id: 1,
       name: 'Pay Yourself First',
    },
    {
      id: 2,
      name: 'Living Expenses',
    },
    {
      id: 3,
      name: 'Auto',
    },
    {
      id: 4,
      name: 'Fun',
    },
];

const expenseSubCategories = [
  {
    id: 1,
    categoryId: 1,
    name: 'savings',
  },
  {
    id: 2,
    categoryId: 1,
    name: 'investments',
  },
  {
    id: 3,
    categoryId: 2,
    name: 'mortgage',
  },
  {
    id: 4,
    categoryId: 2,
    name: 'phone',
  },
  {
    id: 5,
    categoryId: 2,
    name: 'gas',
  },
  {
    id: 6,
    categoryId: 2,
    name: 'electricity',
  },
  {
    id: 7,
    categoryId: 2,
    name: 'groceries/supplies',
  },
  {
    id: 8,
    categoryId: 2,
    name: 'water/trash',
  },
  {
    id: 9,
    categoryId: 3,
    name: 'Loan',
  },
  {
    id: 10,
    categoryId: 3,
    name: 'Insurance',
  },
  {
    id: 11,
    categoryId: 3,
    name: 'gasoline',
  },
  {
    id: 12,
    categoryId: 3,
    name: 'maintenance',
  },
  {
    id: 13,
    categoryId: 4,
    name: 'resturant/bar',
  },
  {
    id: 14,
    categoryId: 4,
    name: 'entertainment',
  },
  {
    id: 13,
    categoryId: 4,
    name: 'clothing',
  },
];

const budgetExpenseItems = [
  {
    id: 1,
    budgetId: 1,
    subcategoryId: 1,
    amount: 100,
  },
  {
    id: 2,
    budgetId: 1,
    subcategoryId: 2,
    amount: 100,
  },
  {
    id: 3,
    budgetId: 1,
    subcategoryId: 3,
    amount: 1200,
  },
  {
    id: 4,
    budgetId: 1,
    subcategoryId: 4,
    amount: 80,
  },
  {
    id: 5,
    budgetId: 1,
    subcategoryId: 5,
    amount: 80,
  },
  {
    id: 6,
    budgetId: 1,
    subcategoryId: 6,
    amount: 100,
  },
  {
    id: 7,
    budgetId: 1,
    subcategoryId: 7,
    amount: 100,
  },
  {
    id: 8,
    budgetId: 1,
    subcategoryId: 8,
    amount: 100,
  },
  {
    id: 9,
    budgetId: 1,
    subcategoryId: 9,
    amount: 100,
  },
];

const transactionExpenseItems = [
  {
    id: 1,
    budgetId: 1,
    subcategoryId: 1,
    amount: 100,
  },
  {
    id: 2,
    budgetId: 1,
    subcategoryId: 2,
    amount: 100,
  },
  {
    id: 3,
    budgetId: 1,
    subcategoryId: 3,
    amount: 1200,
  },
  {
    id: 4,
    budgetId: 1,
    subcategoryId: 4,
    amount: 80,
  },
  {
    id: 5,
    budgetId: 1,
    subcategoryId: 5,
    amount: 80,
  },
  {
    id: 6,
    budgetId: 1,
    subcategoryId: 6,
    amount: 100,
  },
  {
    id: 7,
    budgetId: 1,
    subcategoryId: 7,
    amount: 100,
  },
  {
    id: 8,
    budgetId: 1,
    subcategoryId: 8,
    amount: 100,
  },
  {
    id: 9,
    budgetId: 1,
    subcategoryId: 9,
    amount: 100,
  },
];

const budget = {
  name: 'My Budget',
  id: 1,
  userId: 1,
}

export const budgetAPIModel = {
  id: 1,
  userId: 1,
  name: 'My Budget',
  expenseItems: budgetExpenseItems,
  transactions: transactionExpenseItems
}
