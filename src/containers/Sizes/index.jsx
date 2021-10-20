import { useDispatch, useSelector } from 'react-redux'

import { Colors } from 'containers'
import Button from './styleComponents'

export const Sizes = () => {
  const sizesAndColor = useSelector(state => state.clothReducer)
  const dispatch = useDispatch()

  const handleColor = index => {
    dispatch({ type: sizesAndColor.sizes[index].id })
  }

  return (
    <div className={'ml-5'}>
      <p>SELECT YOUR TYPE</p>
      {Array.from({ length: sizesAndColor.sizes.length }, (v, i) => (
        <Button
          onClick={() => {
            handleColor(i)
          }}
          className={'text-white m-2'}
          key={i}
        >
          {sizesAndColor.sizes[i].abbreviation}
        </Button>
      ))}
      <hr />
      <p>SELECT A COLOR</p>
      <Colors />
    </div>
  )
}
