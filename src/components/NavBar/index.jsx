import { BAG_IMAGE, BAG_LINK } from 'helpers'
import { Centered, Div, GrayBackground, GrayHoverLink, Main, Nav, StyledLink } from './style'

export const NavBar = () => (
  <Div>
    <GrayBackground className={'Navbar navbar-light d-flex justify-content-between'}>
      <Main>Daily Fashion</Main>
      <Main>FREE SHIPPING</Main>
      <Main>
        <GrayHoverLink to={BAG_LINK}>
          <img src={BAG_IMAGE} height={25} />
        </GrayHoverLink>
      </Main>
    </GrayBackground>

    <Nav>
      <Centered>
        <StyledLink to={'/'}>Today Product</StyledLink>
      </Centered>
      <h3>DAILY FASHION</h3>
      <Centered>
        <StyledLink to={'/'}>CONTACT US</StyledLink>
      </Centered>
    </Nav>
  </Div>
)
