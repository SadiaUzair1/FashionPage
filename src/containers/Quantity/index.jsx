import {
  calculateTotalQuantity,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  RESET_QUANTITY
} from 'helpers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div, P } from './style'

export const Quantity = () => {
  const itemSizes = useSelector(state => state.itemReducer.sizes)
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  let [totalQuantity, settotalQuantity] = useState(0)
  let sizeIndex = 0
  let colorIndex = 0

  useEffect(() => {
    let total = calculateTotalQuantity(itemSizes, cart)
    sizeIndex = itemSizes.findIndex(size => size.id === cart.sizeId)
    colorIndex = itemSizes[sizeIndex].colors.findIndex(color => color.name === cart.colorId)

    if (sizeIndex > -1 && colorIndex > -1) {
      settotalQuantity((totalQuantity = itemSizes[sizeIndex].colors[colorIndex].quantity))
    } else {
      settotalQuantity((totalQuantity = total))
      dispatch({ type: RESET_QUANTITY, payload: 0 })
    }

    if (totalQuantity < cart.quantity) {
      dispatch({ type: RESET_QUANTITY, payload: totalQuantity })
    }
  }, [cart.count])

  const handleQuantity = change => {
    console.log('cart', cart)
    if (change === 'decreaseQuantity' && cart.quantity > 1) {
      dispatch({ type: change })
    } else if (
      change === 'increaseQuantity' &&
      cart.quantity < totalQuantity &&
      cart.colorId !== ''
    ) {
      dispatch({ type: change })
    } else if (cart.quantity <= 1 || cart.colorId === '') {
      alert(' Incorrect Quantity or Size or Color is missing')
    }
  }

  return (
    <div>
      <h3>QUANTITY</h3>
      <Div>
        <Button onClick={() => handleQuantity(DECREASE_QUANTITY)}> - </Button>
        <P>{cart.quantity}</P>
        <Button onClick={() => handleQuantity(INCREASE_QUANTITY)}> + </Button>
        <p> Available Quantity: {totalQuantity}</p>
      </Div>
      <hr />
    </div>
  )
}
