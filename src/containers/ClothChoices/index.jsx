import { useDispatch } from 'react-redux'

export const ClothChoices = () => {
  const images = [
    '/images/jumpsuit-1.jpg',
    '/images/jumpsuit-2.jpg',
    '/images/jumpsuit-3.jpg',
    '/images/jumpsuit-4.jpg',
    '/images/jumpsuit-5.jpg'
  ]
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
            src={images[i]}
            height={50}
          />
        </div>
      ))}
    </div>
  )
}
