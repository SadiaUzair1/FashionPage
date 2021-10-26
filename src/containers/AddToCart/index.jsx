import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { Button } from './style'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.itemReducer.cart)
  const cart = useSelector(state => state.cartReducer)
  let [checkItem, setcheckItem] = useState(-1)

  const handleCart = () => {
    const actions = ['add', 'reset', 'decreaseItemQuantity']

    let updatedValue = items.findIndex(
      size => size.sizeId === cart.sizeId && size.colorId === cart.colorId
    )

    if (updatedValue === -1 && cart.quantity > 0) {
      actions.map(action => dispatch({ type: action, payload: cart }))
      alert('Added To Bag')
    } else {
      alert('Already In Bag')
    }
  }

  return (
    <div>
      <Button onClick={() => handleCart()}> ADD TO BAG </Button>
    </div>
  )
}
