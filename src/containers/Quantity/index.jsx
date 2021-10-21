import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './styleComponents'

export const Quantity = () => {
  const clothQuantity = useSelector(state => state.itemReducer)
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  let [totalquantity, settotalquantity] = useState(0)

  useEffect(() => {
    let check = false
    for (let i = 0; i < clothQuantity.sizes.length; i++) {
      if (cart.sizeId == clothQuantity.sizes[i].id) {
        for (let j = 0; j < clothQuantity.sizes[i].colors.length; j++) {
          if (cart.colorId == clothQuantity.sizes[i].colors[j].name) {
            check = true
            settotalquantity((totalquantity = clothQuantity.sizes[i].colors[j].quantity))
          }
        }
      }
    }
    if (check == false) {
      settotalquantity((totalquantity = 0))
    }
  }, [cart.count])

  const handleQuantity = change => {
    if (change == '-') {
      if (cart.quantity > 0) {
        dispatch({ type: '-' })
      }
    } else if (change == '+') {
      if (cart.quantity < totalquantity) {
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
          <p> Available Quantity: {totalquantity}</p>
        </Div>
        <hr />
      </div>
    </div>
  )
}
