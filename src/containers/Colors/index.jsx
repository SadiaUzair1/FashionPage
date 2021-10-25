import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './style'

export const Colors = () => {
  const dispatch = useDispatch()
  const selectedColors = useSelector(state => state.cartReducer)
  const states = useSelector(state => state.itemReducer.sizes)

  let [index, setIndex] = useState(0)

  useEffect(() => {
    states.map((size, i) => {
      console.log(size)
      if (selectedColors.sizeId == size.id) {
        setIndex((index = i))
      }
    })
  }, [selectedColors.count])

  const handleColor = colorId => {
    dispatch({ type: 'color', payload: states[index].colors[colorId].name })
  }

  return (
    <div>
      <h3>SELECT A COLOR</h3>
      <Div>
        {states[index].colors.map((color, i) => (
          <div key={i}>
            <Button onClick={() => handleColor(i)} className={'text-white m-2'} key={i}>
              {color.name}
            </Button>
          </div>
        ))}
      </Div>
      <hr />
    </div>
  )
}
