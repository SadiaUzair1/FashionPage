import { useDispatch, useSelector } from 'react-redux'

export const ClothChoices = () => {
  const images = useSelector(state => state.itemReducer.images)
  const dispatch = useDispatch()

  const handleImageChoice = order => {
    dispatch({ type: 'image', payload: order })
  }

  return (
    <div>
      {images.map((image, i) => (
        <div key={i}>
          <input
            onClick={() => {
              handleImageChoice(image.order)
            }}
            type={'image'}
            src={image.url}
            height={70}
          />
        </div>
      ))}
    </div>
  )
}
