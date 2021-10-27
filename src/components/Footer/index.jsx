import { CONTACT_EMAIL } from 'helpers'
import { Main, Nav } from './style'

export const Footer = () => (
  <div>
    <Nav>
      <Main> For Contact </Main>
      <Main> {CONTACT_EMAIL} </Main>
    </Nav>
  </div>
)
