import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Div } from './styleComponents'
export const Colors = () => {
  const selectedColors = useSelector(state => state.colorReducer)
  let [index, setIndex] = useState(0)

  useEffect(() => {
    for (let i = 0; i < selectedColors.sizes.length; i++) {
      if (selectedColors.sizeId.type == selectedColors.sizes[i].id) {
        setIndex((index = i))
      }
    }
  }, [selectedColors.count])

  const handleColor = () => {
    console.log('test')
  }

  return (
    <Div className={'d-inline-flex'}>
      {Array.from({ length: selectedColors.sizes[index].colors.length }, (v, i) => (
        <div key={i}>
          <Button onClick={() => handleColor(i)} className={'text-white m-2'} key={i}>
            {selectedColors.sizes[index].colors[i].name}
          </Button>
        </div>
      ))}
    </Div>
  )
}
