import { SIZE } from 'helpers'
import { useDispatch, useSelector } from 'react-redux'

import Button from './style'

export const Sizes = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)
  const sizes = useSelector(state => state.itemReducer.sizes)

  const handleColor = sizeId => {
    dispatch({ type: SIZE, payload: sizeId })
  }

  return (
    <div>
      <h3>SELECT YOUR SIZE</h3>
      {sizes.map((size, i) => (
        <Button
          selected={size.id === cart.sizeId ? true : false}
          onClick={() => {
            handleColor(size.id)
          }}
          key={i}
        >
          {size.abbreviation}
        </Button>
      ))}
      <hr />
    </div>
  )
}
