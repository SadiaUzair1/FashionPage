import styled from 'styled-components'

const Button = styled.button`
  &:hover {
    background-color: #db7093;
  }
  background-color: ${props => (props.selected ? '#db7093' : '#faf9f6')};
  border-radius: 50%;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.9em 2em;
`
export default Button
