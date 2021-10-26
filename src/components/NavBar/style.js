import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  &:hover {
    background: #d3d3d3;
  }
  color: Black;
  text-decoration: none;
  margin: 1%;
  position: relative;
`

export const Main = styled.main`
  font-size: 1em;
  margin: 1em;
  padding: 0.25% 2%;
  border: 2px;
  border-radius: 2%;
  width: 100%;
`
export const Centered = styled(Main)`
  margin-right: 2em;
`

export const Div = styled.div`
  width: 100%;
`
export const GrayHoverLink = styled(Link)`
  &:hover {
    background: #faf9f6;
  }
`
export const GrayBackground = styled.nav`
  background-color: #d3d3d3;
  display: inline-flex;
  width: 100%;
`

export const Nav = styled.nav`
  background-color: #faf9f6;
  display: inline-flex;
  width: 100%;
`
