import { useDispatch, useSelector } from 'react-redux'

export const ClothChoices = () => {
  const images = useSelector(state => state.clothReducer.images)
  const dispatch = useDispatch()
  const handleImageChoice = type => {
    dispatch({ type: type })
  }

  return (
    <div className={'mt-5 mr-5'}>
      {Array.from({ length: 5 }, (v, i) => (
        <div key={i}>
          <input
            onClick={() => {
              handleImageChoice(i)
            }}
            type={'image'}
            src={images[i].url}
            height={50}
          />
        </div>
      ))}
    </div>
  )
}
