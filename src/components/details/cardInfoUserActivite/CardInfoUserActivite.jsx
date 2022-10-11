import React,{useEffect, useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import { ProductService } from '../../../views/dons/service/ProductService';

import './CardInfoUserActivite.css'


const productService = new ProductService();

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


const CardInfoUserActivite = (props) => {

    const [valu,setValu]=useState([])

    useEffect(() => {

  
        productService.getAdminDetails(props.infoAdmin).then(data => setValu(data));
       
    }, []); 

    function up()
    {
        if(typeof valu?.admin != 'undifined'){

            
            return valu?.admin?.[0].updated_at

            
           
        }
    }
    function last()
    {
        if(typeof valu?.admin != 'undifined'){


            return valu?.admin?.[0].last_login

            
           
        }
    }
    function create()
    {
        if(typeof valu?.admin != 'undifined'){


            return valu?.admin?.[0].create

            
           
        }
    }


  return (
     <div className="container-fluid">
      
        <h5 style={{fontWeight:'bold'}} >Informations sur ses Activités</h5>
        <div className="card-user p-3">
        <CRow>
            <UserCardActivite titre="Agent(s) créé(s)" info={valu?.agentcree} />
 

            </CRow>
      
            <CRow>
                <UserCardActivite titre="Etat de connexion" info="En ligne" />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date Derniere connexion" info={last()} />
            </CRow>
            <CRow>
                <UserCardActivite titre="Dernier mofication du compte" info={up()} />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date creation du compte" info={create()} />
            </CRow>
         

        </div>
     </div>

  )
}

export default CardInfoUserActivite
