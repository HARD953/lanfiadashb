import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler,CImage,
  CAvatar, } from '@coreui/react'


import { SidebarNav } from './SidebarNav'

import logo from '../../assets/images/logo.png'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './_nav'
import { useEffect } from 'react'
import axiosIntance from '../../api/axiosInstance'

import './Sidebar.css'

import avatar8 from './../../assets/images/avatars/im8.jpg'




const Sidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  

  const [userAdminData,setUserAdminData] = useState([])
  const userData = 'userDatalanfia';

  useEffect(()=>{
    axiosIntance.get('detailadimn/')
    .then((res)=>{
      setUserAdminData(res.data.data[0])
      console.log(res.data.data[0])

      window.localStorage.setItem("profile",res.data.data[0].profile_image)
   

  
  

     
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


 


  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      className="sidebar"
    >
      <CSidebarBrand className="d-none bg-white d-md-flex" to="/dashboard">
      <CImage className="sidebar-brand-full" src={logo} height={65} />
        <CImage className="sidebar-brand-narrow" src={logo} height={65} />
      </CSidebarBrand>
      
      <CSidebarBrand className="info-user-brand" to="/dashboard">
        <div className='row'>
          <div className='col-2 m-auto'>
          
            <CAvatar src={'http://apivulnerable.herokuapp.com'+userAdminData.profile_image} size="md" />
          </div>
          <div className='col-10 text-center'>
            
            <div className=''>
                <h4>{userAdminData.user_name}</h4>
            </div>
            <div className=''>
                <p>{userAdminData.is_superuser==true ? 'Super-administrateur':'Administrateur'}</p>
            </div>
          </div>
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(Sidebar)
