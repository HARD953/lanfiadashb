import React,{useEffect, useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'


import './DetailsActeurs.css'
import CardUsers from '../../../components/details/cardUsers/CardUsers';
import CardInfoUserActivite from '../../../components/details/cardInfoUserActivite/CardInfoUserActivite';
import { useLocation } from 'react-router-dom';
import { ProductService } from '../../../views/dons/service/ProductService';
import axiosIntance from '../../../api/axiosInstance'
import { useEffectX } from 'use-effect-x';

const productService = new ProductService();


    

const DetailsActeursN = (props) => {


  //const [valu,setValu] = useState([])

  const location = useLocation()



  

  
  return ( 

    <CContainer>
        <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Acteurs
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Administrateurs/details
          </div>
        </div>
      </div>
     
      <CRow>
        <CCol xs={12}>
          <CardUsers infoAdmin = {location.state.infoAdmin}/>
        </CCol>
      </CRow>
      
     
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardInfoUserActivite infoAdmin = {location.state.infoAdmin}/>
        </CCol>
      </CRow>

    </CContainer>
  )
}

export default DetailsActeursN
