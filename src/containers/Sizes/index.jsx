import { useDispatch, useSelector } from 'react-redux'

import Button from './style'

export const Sizes = () => {
  const sizes = useSelector(state => state.itemReducer.sizes)
  const dispatch = useDispatch()

  const handleColor = sizeId => {
    dispatch({ type: 'size', payload: sizeId })
  }

  return (
    <div className={'ml-5'}>
      <h3>SELECT YOUR SIZE</h3>
      {sizes.map((size, i) => (
        <Button
          onClick={() => {
            handleColor(size.id)
          }}
          className={'text-white m-2'}
          key={i}
        >
          {size.abbreviation}
        </Button>
      ))}
      <hr />
    </div>
  )
}
