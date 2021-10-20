import styled from 'styled-components'

export const Main = styled.main`
  &:hover {
    background: gray;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border: 2px;
  border-radius: 2px;
  width: 100%;
`
export const Main1 = styled(Main)`
  margin-right: 2em;
`

export const Nav = styled.nav`
  background-color: #faf9f6;
  display: inline-flex;
  width: 100%;
`
