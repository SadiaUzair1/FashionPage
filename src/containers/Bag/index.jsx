import { BagItems, Checkout } from 'containers'
import { CartNavBar } from 'components'
import { Div, Main } from './style'

export const Bag = () => (
  <div>
    <CartNavBar />
    <Div>
      <Main>
        <BagItems />
      </Main>
      <Checkout />
    </Div>
  </div>
)
