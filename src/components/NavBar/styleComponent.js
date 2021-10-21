import styled from 'styled-components'

export const Main = styled.main`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border: 2px;
  border-radius: 2px;
  width: 100%;
`
export const Main1 = styled(Main)`
  &:hover {
    background: #d3d3d3;
  }
  margin-right: 2em;
`
export const Main2 = styled(Main)`
  &:hover {
    background: #faf9f6;
  }
  margin-right: 2em;
`

export const Nav = styled.nav`
  background-color: #faf9f6;
  display: inline-flex;
  width: 100%;
`
export const Nav1 = styled.nav`
  background-color: #d3d3d3;
  display: inline-flex;
  width: 100%;
`
