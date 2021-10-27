import { SIZE } from 'helpers'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from './style'

export const Sizes = () => {
  // const [selectedButton, setselectedButton] = useState(false)
  const cart = useSelector(state => state.cartReducer)
  const sizes = useSelector(state => state.itemReducer.sizes)
  const dispatch = useDispatch()

  const handleColor = sizeId => {
    dispatch({ type: SIZE, payload: sizeId })
  }

  return (
    <div>
      <h3>SELECT YOUR SIZE</h3>
      {sizes.map((size, i) => {
        let selectedButton = false
        if (size.id === cart.sizeId) {
          selectedButton = true
        }

        return (
          <Button
            selected={selectedButton}
            onClick={() => {
              handleColor(size.id)
            }}
            key={i}
          >
            {size.abbreviation}
          </Button>
        )
      })}
      <hr />
    </div>
  )
}
