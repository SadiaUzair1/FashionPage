import { CREAM_COLOR, PINK } from 'helpers'
import styled from 'styled-components'

const Button = styled.button`
  &:hover {
    background-color: #db7093;
  }
  background-color: ${props => (props.selected ? PINK : CREAM_COLOR)};
  border-radius: 50%;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.9em 2em;
`
export default Button
