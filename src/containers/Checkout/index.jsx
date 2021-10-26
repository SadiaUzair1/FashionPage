import { CalculateTotalPrice } from 'helpers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const Checkout = () => {
  const dispatch = useDispatch()
  let [total, setTotal] = useState(0)
  const price = useSelector(state => state.itemReducer)

  useEffect(() => {
    setTotal(CalculateTotalPrice(price))
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
