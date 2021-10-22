import { Link } from 'react-router-dom'

import { Main, Main1, Main2, Nav, Nav1, StyledLink } from './styleComponent'

export const NavBar = () => (
  <div>
    <Nav1 className={'Navbar navbar-light d-flex justify-content-between'}>
      <Main>Daily Fashion</Main>
      <Main>FREE SHIPPING</Main>
      <Main2>
        <Link to={'/bag'}>
          <img src={'images/bag.png'} height={25} />
        </Link>
      </Main2>
    </Nav1>
    <Nav>
      <Main1>
        <StyledLink to={'/'}>Today Product</StyledLink>
      </Main1>
      <h3>DAILY FASHION</h3>
      <Main1>CONTACT US</Main1>
    </Nav>
  </div>
)
