import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'


import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './cardInfoDon.css'



const DonCardInfos=()=>{
    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Libelle Don
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    Don 1
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Lieu Don
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    Don 1/1
                </p>
            </CCol>
        </CRow>
    )
}



const CardInfoDon = () => {

  

  return (
     <div className="container">
        <h5 style={{fontWeight:'bold'}} >Informations sur le don</h5>
        <div className="card-user p-3">
            <CRow>
                <DonCardInfos/>
            </CRow>
            <CRow>
                <CCol xs={12} className="text-end pt-5" >
                    <Button className="px-3 p-button-sm p-button-rounded " aria-label="Pencil">
                        <i className="pi pi-pencil px-2"></i>
                        <span className="px-5">Modifier</span>
                    </Button>
                </CCol>
            </CRow>

        </div>
     </div>

  )
}

export default CardInfoDon
