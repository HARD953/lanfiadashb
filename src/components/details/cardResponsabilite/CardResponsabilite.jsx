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
import { Badge } from 'primereact/badge';

import './CardResponsabilite.css'
import DialogListPlus from '../dialogListPlus/DialogListPlus';



const UserCardInfos=()=>{
    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Localité en charge
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    Treichville
                </p>
            </CCol>
           
        </CRow>
    )
}


const UserCardInfosPlus=(props)=>{
    return(
        <React.Fragment>
        
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                   Nombre de personnes vulnérables dans la Localité
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container-plus" >
               
                <Badge value="0"  className="my-auto" size="large" severity="info"></Badge>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined bnt-info-plus" onClick={()=>props.showDialog("Personnes vulnérables de la localité")}  />

            </CCol>
        </CRow>
        
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                   Nombre de dons effectués dans la Localité
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container-plus" >
               
                <Badge value="0"  className="my-auto" size="large" severity="info"></Badge>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined bnt-info-plus" onClick={()=>props.showDialog("Dons de la localité")} />

            </CCol>
        </CRow>
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Nombre d'agents 
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container-plus" >
               
                <Badge value="0"  className="my-auto" size="large" severity="info"></Badge>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined bnt-info-plus" onClick={()=>props.showDialog("Agents de la localité")} />

            </CCol>
        </CRow>
        </React.Fragment>
    )
}



const CardResponsabilite = () => {

    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogTitre, setDialogTitre] = useState('');

    
    const hideDialog = () => {
        setDialogVisible(false);
    }
    
    const showDialog = (titre) => {
        setDialogTitre(titre);
        setDialogVisible(true);
    }

  return (
     <div className="container-fluid">
        <DialogListPlus dialogTitle={dialogTitre} dialogVisible={dialogVisible} hideDialog={hideDialog}  />
        <h5 style={{fontWeight:'bold'}} >Informations sur ses Responsabilités</h5>
        <div className="card-user p-3">
            <CRow>
                <UserCardInfos/>
            </CRow>
            <CRow>
                <UserCardInfosPlus showDialog={showDialog}  />
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

export default CardResponsabilite
