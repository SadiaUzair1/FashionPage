import { Colors, Materials, Sizes } from 'containers'
import { useSelector } from 'react-redux'

export const ItemNameAndPrice = () => {
  const item = useSelector(state => state.clothReducer)
  return (
    <div>
      <h2>{item.name}</h2>
      <p>
        {item.currency.symbol} {''} {item.price / 100} {''}
        {item.currency.title}
      </p>
      <hr />
      <Sizes />
      <Colors />
      <Materials />
    </div>
  )
}
