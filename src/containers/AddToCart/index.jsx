import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)

  const handleCart = () => {
    if (cart.quantity > 0) {
      dispatch({ type: 'add', payload: cart })
      dispatch({ type: 'reset' })
      dispatch({ type: 'decreaseItemQuantity', payload: cart })
    }
  }

  return (
    <div>
      <Button onClick={() => handleCart()}> ADD TO BAG </Button>
    </div>
  )
}
