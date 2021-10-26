import { useSelector } from 'react-redux'

import { AddToBag, Colors, ItemDescription, Materials, Quantity, Sizes } from 'containers'
import { calculatePrice } from 'helpers'

export const ItemFeatures = () => {
  const item = useSelector(state => state.itemReducer)

  return (
    <div>
      <h3>{item.name}</h3>
      <p> {`${item.currency.symbol} ${calculatePrice(item.price)} ${item.currency.title}`}</p>
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
