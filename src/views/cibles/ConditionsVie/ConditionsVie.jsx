import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilFlower} from '@coreui/icons'

import { InputText } from 'primereact/inputtext';


import './ConditionsVie.css'
import DataTableCrudConditionsVie from '../../../components/Tables/Tables-crud-cible/DataTableCrudConditionsVie';

const ConditionsVie= () => {

  
  const [value3, setValue3] = useState('');


  return (

    <CContainer>
      <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilFlower} height={30} customClassName="" className="me-3" />
            Cibles
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Vulnérables - Conditions de vie
          </div>
        </div>

      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrudConditionsVie acteursTitle="Conditions de vie" />
        </CCol>
      
      </CRow>
    </CContainer>
  )
}


export default ConditionsVie
