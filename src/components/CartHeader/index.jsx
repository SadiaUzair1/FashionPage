import { Main, LeftAlign } from './style'

export const CartHeader = () => (
  <div>
    <nav className={'Navbar navbar-light d-flex justify-content-between'}>
      <Main>
        <h1>Your Shopping Bag</h1>
      </Main>
    </nav>
    <LeftAlign>We offer free shipping and 60 days return </LeftAlign>
    <hr />
  </div>
)
