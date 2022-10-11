import React, { useState }  from 'react'
//import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
 
  CImage,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'


import NavbarDropdown from './NavbarDropdown'
import logo from '../../assets/images/logo.png' 

import './NavBar.css'



const NavBar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [value3, setValue3] = useState('');


  return (
    <CHeader position="sticky" className="mb-4 navbar" >
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
        <CImage className="sidebar-brand-narrow"  alt="Logo"  src={logo} height={45} />
        </CHeaderBrand>
        
        <CHeaderNav className="d-md-flex m-auto">
      
         
        </CHeaderNav>

        <CHeaderNav>

       
         
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <NavbarDropdown />
        </CHeaderNav>
      </CContainer>

    </CHeader>
  )
}

export default NavBar
