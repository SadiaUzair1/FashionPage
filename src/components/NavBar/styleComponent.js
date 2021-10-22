import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  margin: 1%;
  position: relative;
`
export const Div = styled.div`
  width: 100%;
`

export const Main = styled.main`
  font-size: 1em;
  margin: 1em;
  padding: 0.25% 2%;
  border: 2px;
  border-radius: 2%;
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
  margin-right: 2%;
`
export const Main3 = styled(Main)`
  margin-left: 50em;
`
export const Main4 = styled(Main)`
  margin-left: 48em;
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
