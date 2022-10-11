import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilGift, cilPeople} from '@coreui/icons'

import { InputText } from 'primereact/inputtext';

import './DetailsDons.css'
import CardInfoDonateur from '../../../components/details/cardInfoDonateur/cardInfoDonateur';
import CardInfoDon from '../../../components/details/cardInfoDon/cardInfoDon';
import CardInfoUserActivite from '../../../components/details/cardInfoUserActivite/CardInfoUserActivite';


const DetailsDons = () => {

  

  return (

    <CContainer>
        <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilGift} height={30} customClassName="" className="me-3" />
            Dons
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Dons/details
          </div>
        </div>
        <div className="">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText className="input-navbar-search" value=''  placeholder="Rechercher..." />
            </span>
        </div>
      </div>
     
      <CRow>
        <CCol xs={12}>
          <CardInfoDonateur/>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardInfoDon/>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardInfoUserActivite />
        </CCol>
      </CRow>

    </CContainer>
  )
}

export default DetailsDons
