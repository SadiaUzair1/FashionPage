import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './style'

export const Quantity = () => {
  const clothQuantity = useSelector(state => state.itemReducer)
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  let [totalQuantity, settotalQuantity] = useState(0)

  useEffect(() => {
    let check = false
    for (let i = 0; i < clothQuantity.sizes.length; i++) {
      if (cart.sizeId == clothQuantity.sizes[i].id) {
        for (let j = 0; j < clothQuantity.sizes[i].colors.length; j++) {
          if (cart.colorId == clothQuantity.sizes[i].colors[j].name) {
            check = true
            settotalQuantity((totalQuantity = clothQuantity.sizes[i].colors[j].quantity))
            if (totalQuantity < cart.quantity) {
              dispatch({ type: 'resetQuantity', payload: totalQuantity })
            }
          }
        }
      }
    }
    if (check == false) {
      settotalQuantity((totalQuantity = 0))
      dispatch({ type: 'resetQuantity', payload: 0 })
    }
  }, [cart.count])

  const handleQuantity = change => {
    if (change == '-') {
      if (cart.quantity > 1) {
        dispatch({ type: '-' })
      }
    } else if (change == '+') {
      if (cart.quantity < totalQuantity) {
        dispatch({ type: '+' })
      }
    }
  }

  return (
    <div>
      <div>
        <h3>QUANTITY</h3>
        <Div>
          <Button onClick={() => handleQuantity('-')}> - </Button>
          <p>{cart.quantity}</p>
          <Button onClick={() => handleQuantity('+')}> + </Button>
          <p> Available Quantity: {totalQuantity}</p>
        </Div>
        <hr />
      </div>
    </div>
  )
}
