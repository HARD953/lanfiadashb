import React,{useState,useEffect} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'


import './DetailsActeurs.css'
import CardUsersAgent from '../../../components/details/cardUsers/CardUsersAgent';

import { useLocation } from 'react-router-dom';
import { ProductService } from '../../../views/dons/service/ProductService';

import CardInfoUserActiviteAgent from '../../../components/details/cardInfoUserActivite/CardInfoUserActiviteAgent'

const productService = new ProductService();


const DetailsActeursAgent = (props) => {

  const [valu,setValu]=useState([])


  const location = useLocation()

  useEffect(()=>{

    productService.getAgentDetails(location.state.emailAgent).then(data => setValu(data));
     
   })


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
            Agents/details
          </div>
        </div>
      </div>
     
      <CRow>
        <CCol xs={12}>
          <CardUsersAgent infoAgent = {valu}/>
        </CCol>
      </CRow>
      
   
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardInfoUserActiviteAgent infoAgent = {valu}/>
        </CCol>
      </CRow>

    </CContainer>
  )
}

export default DetailsActeursAgent
