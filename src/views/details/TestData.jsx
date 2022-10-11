
import React, { useState, useEffect, useRef } from 'react';
import {
    CCol,
    CRow,
    CContainer,
    CSpinner,
  
  } from '@coreui/react'
  
import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'

import { ProductService } from '../../views/dons/service/ProductService';
import { useLocation } from 'react-router-dom';

import CardUsers from '../../components/details/cardUsers/CardUsers';
import CardInfoUserActivite from '../../components/details/cardInfoUserActivite/CardInfoUserActivite';



const userItem = 'tokendashlanfi';
const tokenUser = localStorage.getItem(userItem)


const productService = new ProductService();

const TestData = (props) => {

const location = useLocation()

const [valu,setValu]=useState([])

    useEffect(() => {
    
        productService.getAdminDetails(location.state.emailActeur).then(data => setValu(data));

    }, []); 

  

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
              <CardUsers infoAdmin = {location.state.emailActeur}/>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={12}>
              <CardInfoUserActivite infoAdmin = {location.state.emailActeur}/>
            </CCol>
          </CRow>
          
         
    
    
        </CContainer>
      )
    
    
  


       

}

export default TestData