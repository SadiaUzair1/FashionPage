import { useSelector } from 'react-redux'

import { AddToBag, Colors, Materials, Quantity, Sizes } from 'containers'
import { ItemDescription } from 'containers'

export const ItemFeatures = () => {
  const item = useSelector(state => state.itemReducer)

  return (
    <div>
      <h3>{item.name}</h3>
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
      <AddToBag />
    </div>
  )
}
