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
import DataTableCrud from '../../../components/Tables/Tables-crud/DataTableCrud'


import './SuperAdministrateurs.css'


const SuperAdministrateurs = () => {

  
  const [value3, setValue3] = useState('');


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
             Super-administrateurs
          </div>
        </div>
   
      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrud acteursTitle="Super-administrateurs" detailUrl="/dashboard/details/acteurssa"/>
        </CCol>
      
      </CRow>
    </CContainer>
  )
}

export default SuperAdministrateurs
