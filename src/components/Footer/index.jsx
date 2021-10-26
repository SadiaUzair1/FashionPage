import { Main, Nav } from './style'

const EMAIL = 'example@example.com'

export const Footer = () => (
  <div>
    <Nav>
      <Main> For Contact </Main>
      <Main> {EMAIL} </Main>
    </Nav>
  </div>
)
