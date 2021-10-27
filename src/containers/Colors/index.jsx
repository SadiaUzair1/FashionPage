import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { COLOR } from 'helpers'

import { Button, Div } from './style'

export const Colors = () => {
  const dispatch = useDispatch()
  const selectedColors = useSelector(state => state.cartReducer)
  const states = useSelector(state => state.itemReducer.sizes)
  let [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((index = states.findIndex(size => size.id === selectedColors.sizeId)))
  }, [selectedColors.count])

  const handleColor = colorId => {
    dispatch({ type: COLOR, payload: states[index].colors[colorId].name })
  }

  return (
    <div>
      <h3>SELECT A COLOR</h3>
      <Div>
        {states[index].colors.map((color, i) => {
          let selectedButton = false
          if (color.name === selectedColors.colorId) {
            selectedButton = true
          }
          return (
            <div key={i}>
              <Button
                color={color.name}
                selected={selectedButton}
                onClick={() => handleColor(i)}
                key={i}
              ></Button>
            </div>
          )
        })}
      </Div>
      <hr />
    </div>
  )
}
