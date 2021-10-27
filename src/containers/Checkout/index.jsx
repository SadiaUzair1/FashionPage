import { calculateTotalPrice, totalPrice, RESET_CART } from 'helpers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './style'

export const Checkout = () => {
  const dispatch = useDispatch()
  let [total, setTotal] = useState(0)
  const price = useSelector(state => state.itemReducer)

  useEffect(() => {
    setTotal(calculateTotalPrice(price))
  }, [price.cart])

  const handleCheckout = () => {
    if (total !== 0) {
      alert('Thank you for shopping with us')
      dispatch({ type: RESET_CART })
    } else {
      alert('Select Item First')
    }
  }

  return (
    <div>
      <h3> {totalPrice(price, total)} </h3>
      <Button onClick={() => handleCheckout()}> CHECKOUT </Button>
    </div>
  )
}
