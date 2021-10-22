import { CartNavBar } from 'components'
import { BagItems, Checkout } from 'containers'
import { Div, Main } from './styleComponents'
export const Bag = () => {
  return (
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
}
