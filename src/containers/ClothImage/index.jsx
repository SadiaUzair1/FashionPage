import { useSelector } from 'react-redux'

export const ClothImage = () => {
  const selectedCloth = useSelector(state => state.clothReducer)
  return (
    <div className={'ml-5'}>
      <img src={selectedCloth.type} width={550} height={600} />
    </div>
  )
}
