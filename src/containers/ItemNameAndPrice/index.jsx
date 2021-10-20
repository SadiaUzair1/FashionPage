import { Sizes } from 'containers'
import { useSelector } from 'react-redux'

export const ItemNameAndPrice = () => {
  const item = useSelector(state => state.clothReducer)
  return (
    <div>
      <p>{item.name}</p>
      <p>
        {item.currency.symbol}
        {item.price}
        {item.currency.title}
      </p>
      <hr />
      <Sizes />
    </div>
  )
}
