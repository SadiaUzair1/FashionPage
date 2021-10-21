import { useDispatch, useSelector } from 'react-redux'

export const ClothChoices = () => {
  const images = useSelector(state => state.itemReducer.images)
  const dispatch = useDispatch()

  const handleImageChoice = type => {
    dispatch({ type: type })
  }

  return (
    <div>
      {Array.from({ length: images.length }, (v, i) => (
        <div key={i}>
          <input
            onClick={() => {
              handleImageChoice(images[i].order)
            }}
            type={'image'}
            src={images[i].url}
            height={70}
          />
        </div>
      ))}
    </div>
  )
}
