import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
 

  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt=""/>
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu >
        <a  href="#">Shop</a>
        <a  href="#">Tesla Account</a>
        <CustomMenu> 
          <img src="images/menu.png" onClick={()=>setBurgerStatus(true)} />
        </CustomMenu>
      </RightMenu>
      <BurgerMenu show={burgerStatus}> 
        <CloseWrapper>
          <CustomClose>
            <img src="images/x.png" onClick={()=>setBurgerStatus(false)} />
          </CustomClose>
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Panel</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div `
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; 
`

const Menu = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div `
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 15px;
  }

`

const CustomMenu = styled.div`
  cursor: pointer;
  img {
    width: 20px;
  }

`

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a {
        font-weight: 600;
       }

  }



`

const CloseWrapper = styled.div `
  display: flex;
  justify-content: flex-end;

`

const CustomClose = styled.div`

  img {
    width: 20px;
    cursor: pointer;
    
  }

`