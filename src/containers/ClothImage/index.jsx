import { useSelector } from 'react-redux'

export const ClothImage = () => {
  const selectedCloth = useSelector(state => state.clothReducer)
  return (
    <div className={'ml-5'}>
      <img src={selectedCloth.clothImage} width={550} height={600} />
    </div>
  )
}
