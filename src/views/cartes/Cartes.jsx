import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'

import { Dropdown } from 'primereact/dropdown';
 

import './Cartes.css'
import CarteLeft from '../../components/cartes/carteLeft/CarteLeft';
import CarteRight from '../../components/cartes/carteRight/CarteRight';


const Cartes = () => {

  const [choixTypeCible, setChoixTypeCible] = useState(null);

  const choixSelect = [
    { label:"Individuels", value:"Individuels"},
    { label:"Menages", value:"Menages"}
  ]

  const onChangeChoixTypeCible = (e) => {
    setChoixTypeCible(e.value);
  }


  return (

    <CContainer>
      <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Cartes
          </h2>
          {/* <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Agents
         </div>*/}
        </div>
        <div className="">
          <span className="p-input-icon-left">
              <Dropdown className='input-navbar-search' value={choixTypeCible} options={choixSelect} onChange={onChangeChoixTypeCible} placeholder="Choisir type cible"/>
            </span>
        </div>
      </div>
      <CRow className="mt-5" >
      
        <CCol xs={3}>
            <CarteLeft/>
        </CCol>
        <CCol xs={9}>
          <CarteRight/>
        </CCol>
      
      </CRow>
    </CContainer>
  )
}

export default Cartes;