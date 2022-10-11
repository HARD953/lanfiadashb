import React from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'
import './Compte.css'



import ProfilCard from '../../components/ProfilCard/ProfilCard';
import CardInfoUserActiviteCompte from '../../components/details/cardInfoUserActivite/CardInfoUserActiviteCompte';
const styles = {
  fontFamily: "sans-serif",
 
};

const Compte = () => {

  

  return (

   <CContainer>
     
  
      

    <div style={styles}>
      <ProfilCard />
    </div>
    
    <div className="container ">
   
    <CRow>
        <CCol xs={15} className="mt-5 container">
        
          <div className=" p-2 border-top border-bottom">
            
            <CardInfoUserActiviteCompte />

          </div>

        </CCol>
      </CRow>
      </div>
      
      
     
    </CContainer>
  )
}

export default Compte
