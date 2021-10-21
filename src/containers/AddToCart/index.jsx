import { useDispatch, useSelector } from 'react-redux'

import { Button } from './styleComponents.jsx'

export const AddToBag = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)

  const handleCart = () => {
    dispatch({ type: 'cart', payload: cart })
  }

  return (
    <div>
      <Button onClick={() => handleCart()}> ADD TO BAG </Button>
    </div>
  )
}
