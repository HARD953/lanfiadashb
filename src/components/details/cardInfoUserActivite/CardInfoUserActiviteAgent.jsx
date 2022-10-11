import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'


import './CardInfoUserActivite.css'

const UserCardActivite=(props)=>{


    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                     {props.titre}
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    {props.info}
                </p>
            </CCol>
        </CRow>
    )
}


const CardInfoUserActiviteAgent = (props) => {
  
    
  return (
     <div className="container-fluid">
      
        <h5 style={{fontWeight:'bold'}} >Informations sur ses Activités</h5>
        <div className="card-user p-3">
        <CRow>
                <UserCardActivite titre="Recensés par l'agent" info = {props.infoAgent.data?.personneR} />

            </CRow>
        
            <CRow>
                <UserCardActivite titre="Etat de connexion" info="En ligne" />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date Derniere connexion" info={props.infoAgent.data?.agent?.[0].last_login} />
            </CRow>
            <CRow>
                <UserCardActivite titre="Dernier mofication du compte" info={props.infoAgent.data?.agent?.[0].updated_at} />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date creation du compte" info={props.infoAgent.data?.agent?.[0].create} />
            </CRow>
     

        </div>
     </div>

  )
}

export default CardInfoUserActiviteAgent
