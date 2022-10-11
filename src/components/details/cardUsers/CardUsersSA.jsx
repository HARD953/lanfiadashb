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

import './CardUsers.css'
import { InputSwitch } from 'primereact/inputswitch';



const UserCardInfos=(props)=>{
    
    const [checked1, setChecked1] = useState(props?.infoAdmin.infoAdmin?.superadmin?.[0].is_active);

    const [checked2, setChecked2] = useState(props?.infoAdmin.infoAdmin?.superadmin?.[0].is_superuser);


    const AdminCheck1 = (val)=>
        {
            setChecked1(val)
            console.log(val)
        }
     

    const AdminCheck2 = (val)=>
        {
         
            setChecked2(val)
            console.log(val)
        }
     

    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Nom utilisateur
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {props?.infoAdmin.infoAdmin?.superadmin?.[0].user_name}
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Nom
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {props?.infoAdmin.infoAdmin?.superadmin?.[0].first_name}
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    E-mail
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {props?.infoAdmin.infoAdmin?.superadmin?.[0].email}
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Commune
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {props?.infoAdmin.infoAdmin?.superadmin?.[0].commune}
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Adresse
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {props?.infoAdmin.infoAdmin?.superadmin?.[0].adresse}
                </p>
            </CCol>
       {/*     <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Actif
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
              
                <InputSwitch checked={checked1} onChange={(e) => AdminCheck1(e.value)} />
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Super-administrateur
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
             
                <InputSwitch checked={checked2} onChange={(e) => AdminCheck2(e.value)} />
                </p>
            </CCol>*/} 
        </CRow>
    )
}



const CardUsersSA = (props) => {

 

  return (
     <div className="container">
        <h5 style={{fontWeight:'bold'}} >Informations sur Acteur</h5>
        <div className="card-user p-3">
            <CRow>
                <UserCardInfos infoAdmin= {props}/>
            </CRow>
            <CRow>
               
            </CRow>

        </div>
     </div>

  )
}

export default CardUsersSA
