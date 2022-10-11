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
import { useLocation } from 'react-router-dom';
import { ProductService } from '../../../views/dons/service/ProductService';

import CardUsersR from '../../../components/details/cardUsers/CardUsersR'

const productService = new ProductService();


    

const DetailsActeursR = (props) => {


  //const [valu,setValu] = useState([])

  const location = useLocation()



  var z = 0;

  if(z===0){
  return ( 

    <CContainer>
        <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Cibles
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Individus/details
          </div>
        </div>
      </div>
     
      <CRow>
        
        <CCol xs={12}>
       
          <CardUsersR infoAdmin = {location.state.idActeur} type='Individus'/>
        </CCol>
      </CRow>
      
     
      
      

    </CContainer>
  )
  }
  z=z+1;
}

export default DetailsActeursR
