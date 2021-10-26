import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './style'

export const Quantity = () => {
  const itemSizes = useSelector(state => state.itemReducer.sizes)
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  let [totalQuantity, settotalQuantity] = useState(0)
  let sizeIndex = 0
  let colorIndex = 0

  useEffect(() => {
    sizeIndex = itemSizes.findIndex(size => size.id === cart.sizeId)
    colorIndex = itemSizes[sizeIndex].colors.findIndex(color => color.name === cart.colorId)

    if (sizeIndex > -1 && colorIndex > -1) {
      settotalQuantity((totalQuantity = itemSizes[sizeIndex].colors[colorIndex].quantity))
    } else {
      settotalQuantity((totalQuantity = 0))
      dispatch({ type: 'resetQuantity', payload: 0 })
    }

    if (totalQuantity < cart.quantity) {
      dispatch({ type: 'resetQuantity', payload: totalQuantity })
    }
  }, [cart.count])

  const handleQuantity = change => {
    if (change === 'decreaseQuantity' && cart.quantity > 1) {
      dispatch({ type: change })
    } else if (change === 'increaseQuantity' && cart.quantity < totalQuantity) {
      dispatch({ type: change })
    }
  }

  return (
    <div>
      <h3>QUANTITY</h3>
      <Div>
        <Button onClick={() => handleQuantity('decreaseQuantity')}> - </Button>
        <p>{cart.quantity}</p>
        <Button onClick={() => handleQuantity('increaseQuantity')}> + </Button>
        <p> Available Quantity: {totalQuantity}</p>
      </Div>
      <hr />
    </div>
  )
}
