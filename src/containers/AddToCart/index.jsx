import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)

  const handleCart = () => {
    const actions = ['add', 'reset', 'decreaseItemQuantity']
    if (cart.quantity > 0) {
      actions.map(action => dispatch({ type: action, payload: cart }))
    }
  }

  return (
    <div>
      <Button onClick={() => handleCart()}> ADD TO BAG </Button>
    </div>
  )
}
