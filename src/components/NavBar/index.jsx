import { Main, Main1, Nav } from './styleComponent'
export const NavBar = () => (
  <div>
    <Nav className={'Navbar navbar-light d-flex justify-content-between'}>
      <Main>Daily Fashion</Main>
      <Main>FREE SHIPPING</Main>
    </Nav>
    <Nav>
      <Main1>TODAY PRODUCT</Main1>
      <Main1>DAILY FASHION</Main1>
      <Main1>CONTACT US</Main1>
    </Nav>
  </div>
)
