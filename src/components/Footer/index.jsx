import { Link } from 'react-router-dom'

import { Div, Main1, Nav } from './styleComponents'

export const Footer = () => (
  <div>
    <Div>
      <Link to={'/chat'} className={'mb-5'}>
        <img src={'images/chat.png'} height={80} />
      </Link>
    </Div>
    <Nav>
      <Main1> For Contact</Main1>
      <Main1> example@example.com</Main1>
    </Nav>
  </div>
)
