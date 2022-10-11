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


import './Menages.css'
import DataTableCrudMenages from '../../../components/Tables/Tables-crud-cible/DataTableCrudMenages';


const Menages = () => {

  
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
            Menages
          </div>
        </div>
 
      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrudMenages acteursTitle="Menages" />
        </CCol>
      
      </CRow>
    </CContainer>
  )
}


export default Menages
