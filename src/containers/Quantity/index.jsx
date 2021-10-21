import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './styleComponents'

export const Quantity = () => {
  const clothQuantity = useSelector(state => state.itemReducer)
  const cart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  let [totalquantity, settotalquantity] = useState(0)

  useEffect(() => {
    for (let i = 0; i < clothQuantity.sizes.length; i++) {
      if (cart.sizeId == clothQuantity.sizes[i].id) {
        for (let j = 0; j < clothQuantity.sizes[i].colors.length; j++) {
          if (cart.colorId == clothQuantity.sizes[i].colors[j].name) {
            console.log(clothQuantity.sizes[i].colors[j].quantity)
            settotalquantity((totalquantity = clothQuantity.sizes[i].colors[j].quantity))
          }
        }
      }
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
        <h2>QUANTITY</h2>
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
