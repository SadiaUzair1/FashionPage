import { useSelector } from 'react-redux'

export const ItemNameAndPrice = () => {
  const item = useSelector(state => state.itemDetailsReducer)
  console.log(item)
  return (
    <div>
      <p>{item}</p>
    </div>
  )
}
