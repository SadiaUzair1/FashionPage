import { ADD, DECREASE_ITEM_QUANTITY, RESET } from 'helpers'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from './style'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)

  const handleCart = () => {
    const actions = [ADD, RESET, DECREASE_ITEM_QUANTITY]
    actions.map(action => dispatch({ type: action, payload: cart }))
    alert('Added To Bag')
  }

  return (
    <div>
      <Button onClick={() => handleCart()}> ADD TO BAG </Button>
    </div>
  )
}
