import { ADD, DECREASE_ITEM_QUANTITY, RESET, setUpdatedValue } from 'helpers'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.itemReducer.cart)
  const cart = useSelector(state => state.cartReducer)

  const handleCart = () => {
    const actions = [ADD, RESET, DECREASE_ITEM_QUANTITY]

    let updatedValue = setUpdatedValue(items, cart)

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
