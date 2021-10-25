import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './style'

export const Colors = () => {
  const dispatch = useDispatch()
  const selectedColors = useSelector(state => state.cartReducer)
  const states = useSelector(state => state.itemReducer.sizes)

  let [index, setIndex] = useState(0)

  useEffect(() => {
    for (let i = 0; i < states.length; i++) {
      if (selectedColors.sizeId == states[i].id) {
        setIndex((index = i))
      }
    }
  }, [selectedColors.count])

  const handleColor = colorId => {
    dispatch({ type: 'color', payload: states[index].colors[colorId].name })
  }

  return (
    <div>
      <h3>SELECT A COLOR</h3>
      <Div className={'d-inline-flex'}>
        {Array.from({ length: states[index].colors.length }, (v, i) => (
          <div key={i}>
            <Button onClick={() => handleColor(i)} className={'text-white m-2'} key={i}>
              {states[index].colors[i].name}
            </Button>
          </div>
        ))}
      </Div>
      <hr />
    </div>
  )
}
