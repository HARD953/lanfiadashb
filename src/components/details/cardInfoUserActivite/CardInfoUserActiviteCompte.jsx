import React,{useEffect, useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import axiosInstance from '../../../api/axiosInstance'
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


const CardInfoUserActiviteCompte = (props) => {

    const [valu,setValu]=useState([])



  
    useEffect(()=>{
      axiosInstance.get('detailadimn/')
      .then((res)=>{
        setValu(res.data.data[0])
        
  
       
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])

    function up()
    {
        if(typeof valu != 'undifined'){

            
            return valu?.updated_at

            
           
        }
    }
    function last()
    {
        if(typeof valu != 'undifined'){


            return valu?.last_login

            
           
        }
    }
    function create()
    {
        if(typeof valu != 'undifined'){


            return valu?.create

            
           
        }
    }


  return (
     <div className="container-fluid">
      
        <h5 style={{fontWeight:'bold'}} >Informations sur ses Activités</h5>
        <div className="card-user p-3">
       
      
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

export default CardInfoUserActiviteCompte
