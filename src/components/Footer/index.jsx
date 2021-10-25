import { Link } from 'react-router-dom'

import { Div, Main, Nav } from './style'

export const Footer = () => (
  <div>
    <Div>
      <Link to={'/chat'} className={'mb-5'}>
        <img src={'images/chat.png'} height={80} />
      </Link>
    </Div>
    <Nav>
      <Main> For Contact </Main>
      <Main> example@example.com </Main>
    </Nav>
  </div>
)
