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

import './Individuels.css'
import DataTableCrudIndividus from '../../../components/Tables/Tables-crud-cible/DataTableCrudIndividus';


const Individuels = () => {

  
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
            Individuels
          </div>
        </div>

      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrudIndividus acteursTitle="Individuels" detailUrl="/dashboard/details/individus"/>
        </CCol>
      
      </CRow>
    </CContainer>
  )
}

export default Individuels

