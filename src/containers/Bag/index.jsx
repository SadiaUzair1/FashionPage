import { BagItems, Checkout } from 'containers'
import { CartHeader } from 'components'

import { Div, Main } from './style'

export const Bag = () => (
  <div>
    <CartHeader />
    <Div>
      <Main>
        <BagItems />
      </Main>
      <Checkout />
    </Div>
  </div>
)
