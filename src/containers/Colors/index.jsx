import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Div } from './styleComponents'

export const Colors = () => {
  const dispatch = useDispatch()
  const selectedColors = useSelector(state => state.cartReducer)
  const states = useSelector(state => state.clothReducer)
  let [index, setIndex] = useState(0)

  useEffect(() => {
    for (let i = 0; i < states.sizes.length; i++) {
      if (selectedColors.sizeId == states.sizes[i].id) {
        setIndex((index = i))
      }
    }
  }, [selectedColors.count])

  const handleColor = colorId => {
    dispatch({ type: states.sizes[index].colors[colorId].name })
  }
  return (
    <div>
      <h2>SELECT A COLOR</h2>
      <Div className={'d-inline-flex'}>
        {Array.from({ length: states.sizes[index].colors.length }, (v, i) => (
          <div key={i}>
            <Button onClick={() => handleColor(i)} className={'text-white m-2'} key={i}>
              {states.sizes[index].colors[i].name}
            </Button>
          </div>
        ))}
      </Div>
      <hr />
    </div>
  )
}
