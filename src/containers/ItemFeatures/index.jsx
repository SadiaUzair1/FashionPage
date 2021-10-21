import { useSelector } from 'react-redux'

import { Colors, Materials, Quantity, Sizes } from 'containers'
import { ItemDescription } from 'containers/'

export const ItemFeatures = () => {
  const item = useSelector(state => state.itemReducer)
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
      <ItemDescription />
    </div>
  )
}
