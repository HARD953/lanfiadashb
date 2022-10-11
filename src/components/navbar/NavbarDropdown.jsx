import React, { useEffect } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/im8.jpg'
import { useNavigate } from 'react-router-dom';
import axiosIntance from '../../api/axiosInstance';

const NavbarDropdown = () => {

  const userItem = 'tokendashlanfi';
 

  const navigation = useNavigate()

  function deconnexion (){
   
      axiosIntance.post('logout/blacklist/')
      .then((res)=>{
         
      })
      .catch((error)=>{
        console.log(error)
      })

      localStorage.removeItem(userItem);
  
     navigation('/',{replace:true})
     window.location.reload(false);
  }

  var profile = window.localStorage.getItem('profile');


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={'http://apivulnerable.herokuapp.com'+profile} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Mon profil</CDropdownHeader>
        <CDropdownItem href="/dashboard/compte">
          <CIcon icon={cilUser} className="me-2" />
          Mon compte
        </CDropdownItem>
    
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Paramètres
        </CDropdownItem>
       
        <CDropdownDivider />
        <CDropdownItem onClick={deconnexion}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Deconnexion
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default NavbarDropdown
