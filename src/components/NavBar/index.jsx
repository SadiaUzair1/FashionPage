import { Main, Main1, Main2, Nav, Nav1 } from './styleComponent'
export const NavBar = () => (
  <div>
    <Nav1 className={'Navbar navbar-light d-flex justify-content-between'}>
      <Main>Daily Fashion</Main>
      <Main>FREE SHIPPING</Main>
      <Main2>BAG</Main2>
      <Main2>Item</Main2>
    </Nav1>
    <Nav>
      <Main1>TODAY PRODUCT</Main1>
      <h3>DAILY FASHION</h3>
      <Main1>CONTACT US</Main1>
    </Nav>
  </div>
)
