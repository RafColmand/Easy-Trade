export const country = [
  {
    id: "0",
    name: "Venezuela"
  },
  {
    id: "1",
    name: "España"
  },
  {
    id: "2",
    name: "Alemania"
  },
  {
    id: "3",
    name: "Chile"
  },
];

export const city = [
      {
        id: "0",
        name: "Barquisimeto"
      },
      {
        id: "1",
        name: "Valencia"
      },
      {
        id: "2",
        name: "Caracas"
      },
      {
        id: "3",
        name: "Falcon"
      },
];
  
export const gender = [
    {
      id: "0",
      name: "Femenino"
    },
    {
      id: "1",
      name: "Masculino"
    }
];

export const users = [
    {
      id: "0",
      firstName: "Marihec",
      lastName: "Miranda",
      email: "marihecmiranda160498@gmail.com",
      password: "123abc"
    },
    {
      id: "1",
      firstName: "Rafael",
      lastName: "Colmenarez",
      email: "rafcolmand@gmail.com",
      password: "123abc"
    },
];

export const transactionsStock = [
  {
    id: "0",
    seller_user: "Marihec",
    seller_buyer: "Miranda",
    stock_symbol: "AAPL",
    quantify: "2",
    price: "2000",
    date: "12/09/2023"
  },
  {
    id: "1",
    seller_user: "Marihec",
    seller_buyer: "Miranda",
    stock_symbol: "AAPL",
    quantify: "2",
    price: "2000",
    date: "12/09/2023"
  },
  {
    id: "2",
    seller_user: "Marihec",
    seller_buyer: "Miranda",
    stock_symbol: "AAPL",
    quantify: "2",
    price: "2000",
    date: "12/09/2023"
  },
  {
    id: "3",
    seller_user: "Marihec",
    seller_buyer: "Miranda",
    stock_symbol: "AAPL",
    quantify: "2",
    price: "2000",
    date: "12/09/2023"
  },
  {
    id: "4",
    seller_user: "Marihec",
    seller_buyer: "Miranda",
    stock_symbol: "AAPL",
    quantify: "2",
    price: "2000",
    date: "12/09/2023"
  },
];

export const transactionsPayment = [
  {
    id: "0",
    type:"retiro",
    paymentMethod: "Paypal",
    amount: 2000,
    date: "12/09/2023",
    hour: "8:00"
  },
  {
    id: "1",
    type:"retiro",
    paymentMethod: "Paypal",
    amount: 2000,
    date: "12/09/2023",
    hour: "8:00"
  },
  {
    id: "2",
    type:"retiro",
    paymentMethod: "Paypal",
    amount: 2000,
    date: "12/09/2023",
    hour: "8:00"
  },
  {
    id: "3",
    type:"retiro",
    paymentMethod: "Paypal",
    amount: 2000,
    date: "12/09/2023",
    hour: "8:00"
  },
  {
    id: "4",
    type:"retiro",
    paymentMethod: "Paypal",
    amount: 2000,
    date: "12/09/2023",
    hour: "8:00"
  },
];

export const balance ={
  balanceT: 2500,
  balanceD: 2000,
  balanceC:  500,
}

export const optionsTP = [
    {
        name: "Transacciones",
        href: "/transactions"
    },
    {
        name: "Depositar",
        href: "/transactions"
    },
    {
        name: "Retirar",
        href: "/orders"
    },
]

export const optionsTo ={
  Transactions:"Transacciones",
  buy:"Comprar",
  sell: "Vender",
}