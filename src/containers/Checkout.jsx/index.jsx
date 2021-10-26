import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const Checkout = () => {
  const dispatch = useDispatch()
  let [total, setTotal] = useState(0)
  const price = useSelector(state => state.itemReducer)

  useEffect(() => {
    let prices = price.cart.map(cart => (price.price * cart.quantity) / 10)
    setTotal(prices.length == 0 ? 0 : prices.reduce((a, b) => a + b))
  }, [price.cart])

  const handleCheckout = () => {
    if (total !== 0) {
      alert('Thank you for shopping with us')
      dispatch({ type: 'resetCart' })
    } else {
      alert('Select Item First')
    }
  }

  return (
    <div>
      <h3>
        {price.currency.symbol} {''} {total} {''}
        {price.currency.title}
      </h3>
      <Button onClick={() => handleCheckout()}> CHECKOUT </Button>
    </div>
  )
}
