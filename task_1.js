// Задание 1

const groceries = {
  'Orange Juice': {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
  // tomato: {
  //   price: 2,
  //   discount: 0,
  // },
}

function getTotalPriceOfShoppingBag(shoppingBag) {
  const mas = shoppingBag
    .map((el) => {
      const quantity = groceries[el.product].price * el.quantity
      const discount = (quantity * groceries[el.product].discount) / 100
      return quantity - discount
    })
    .reduce((acc, el) => acc + el, 0)
    .toFixed(2)
  return Number(mas)
}

const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
  // { product: 'tomato', quantity: 10 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice) // Возвращает 37.05
