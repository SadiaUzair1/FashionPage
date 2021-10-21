import { useSelector } from 'react-redux'

import { Colors, Materials, Quantity, Sizes } from 'containers'

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
      <Quantity />
    </div>
  )
}
