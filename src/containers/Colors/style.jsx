import { PINK } from 'helpers'
import styled from 'styled-components'

export const Div = styled.div`
  display: inline-flex;
  height: 10%;
`
export const Button = styled.button`
  background-color: ${props => props.color};
  border-color: ${props => (props.selected ? PINK : props.color)};
  color: ${props => (props.selected ? 'white' : props.color)};
  border-radius: 50%;
  margin: 1em;
  padding: 0.9em 1em;
`
