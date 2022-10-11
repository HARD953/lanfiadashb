import React, { useState } from 'react'
import { useEffect } from 'react'

import { Image } from 'primereact/image';
 

import {CRow,CCol } from "@coreui/react";
import axiosInstance from '../../api/axiosInstance'
import avatar8 from './../../assets/images/avatars/im8.jpg'


const ProfilCard = () =>  {

    
  const [userAdminData,setUserAdminData] = useState([])

  
  useEffect(()=>{
    axiosInstance.get('detailadimn/')
    .then((res)=>{
      setUserAdminData(res.data.data[0])


     
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

    return (
      
      <div className="container">
      
         <div className='card  border p-4 m-2' >
          <CRow>
       
                <div className="col-12 md:col-12 text-center">
                    <div className="rounded-circle" >
                      
                    <Image src={userAdminData.profile_image}  alt="Image" width="200" shape='circle' preview />
                        <h5>{userAdminData.user_name}</h5>
                    </div>
                </div>

 
          
          
                    <h5 as="h5" className="text-primary">
                    
                      CONTACT
                    </h5>
        
          <CCol  xs={12} md={6} className="mt-1"  >      
             
                 
                    <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                    
                      Name:
                    </h5>
          </CCol>

          <CCol  xs={12} md={6} className="mt-1" >   
                    <b>{userAdminData.first_name}</b>
          </CCol>
          <br></br>
         

          <CCol  xs={12} md={3} className="mt-3" >

                    <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                      {" "}
                      Phone:
                    </h5>
          </CCol>

          <CCol xs={12} md={3} className="mt-3" >
                    <b>{userAdminData.user_name}</b>           
          </CCol>
          <br></br>
          <CCol  xs={12} md={3} className="mt-3" >   
                
                <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                  {" "}
                  Email:
                </h5>
      </CCol>

      <CCol  xs={12} md={3} className="mt-3" >    
         
                <b>{userAdminData.email}</b>
      </CCol>

    

    
      <br></br>
          
          
          </CRow>
        </div>
      </div>
    
    );
  
}
export default ProfilCard;
