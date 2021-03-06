import React from 'react'
import styled from 'styled-components'
import NavTitle from './NavTitle'
import NavItem from './NavItem'
import SCREEN_SIZE from '../../utils/ScreenSize'
import NoStyleLink from '../../atomics/NoStyleLink'

const NavContainer = styled.nav`
  position: absolute;

  width: 100vw;
  height: 4rem;

  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: #201d20;

  z-index: 10;
`

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 20px;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    display: none;
  }
`

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NoStyleLink to='/'>
        <NavTitle />
      </NoStyleLink>

      <NavItemListStyle>
        <NavItem>
          <NoStyleLink to='/'>Home</NoStyleLink>
        </NavItem>
        <NavItem>
          <NoStyleLink to='/about'>About</NoStyleLink>
        </NavItem>
        <NavItem>
          <NoStyleLink to='/recruit'>Recruit</NoStyleLink>
        </NavItem>
        <NavItem>
          <a href='https://blog.teamif.io' rel='noopener noreferrer'>
            Blog
          </a>
        </NavItem>
      </NavItemListStyle>
    </NavContainer>
  )
}

export default NavigationBar
