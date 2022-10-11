import React,{useEffect, useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'


import './CardUsers.css'
import { InputSwitch } from 'primereact/inputswitch';

import { ProductService } from '../../../views/dons/service/ProductService';




const productService = new ProductService();

const UserCardInfos=(props)=>{

    const [valu,setValu]=useState([])

    useEffect(() => {

    
        productService.getAdminDetails(props.infoAdmin.infoAdmin).then(data => setValu(data));
       
    }, []); 

  
 

    const [checked1, setChecked1] = useState( valu.admin?.[0].is_active );

    const [checked2, setChecked2] = useState(valu.admin?.[0].is_superuser);
    
   


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
     
        function checkName()
        {
            if(typeof valu.admin != 'undifined'){

                return(valu.admin?.[0].first_name)
               
            }
            else {
                return ''
            }
        }

        function checkuserName()
        {
            if(typeof valu.admin != 'undifined'){


                return(valu.admin?.[0].user_name)

                
               
            }
            else {
                return ''
            }
        }
        function checkEmail()
        {
            if(typeof valu.admin != 'undifined'){

                
                return(valu.admin?.[0].email)
               
            }
            else {
                return ''
            }
        }
        function checkCommune()
        {
            if(typeof valu.admin != 'undifined'){

                
                return(valu.admin?.[0].commune)
               
            }
            else {
                return ''
            }
        }
        function checkAdresse()
        {
            if(typeof valu.admin != 'undifined'){

                
                return(valu.admin?.[0].adresse)
               
            }
            else {
                return ''
            }
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
                {valu.admin?.[0].user_name }
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Nom
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {checkName() }      </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    E-mail
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {checkEmail() }    </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Commune
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {checkCommune() }  </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Adresse
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                {checkAdresse() } </p>
            </CCol>
      {/*        <CCol xs={12} md={6} >
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
    </CCol> */}
        </CRow>
    )
}



const CardUsers = (props) => {

  

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


export default CardUsers
