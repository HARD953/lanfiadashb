import React, { useEffect, useState } from 'react'
import {
  CCol,
  CContainer,
  CRow,

} from '@coreui/react'


import { Dialog } from 'primereact/dialog';
import './DialogActeurDetail.css'
import { Avatar } from 'primereact/avatar';

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




const DialogActeurDetail = (props) => {
    const [userInformation,setUserInformation] = useState([])

    useEffect(()=>{
        setUserInformation(props.userActeurData)
    })
  

  return (
     
     <Dialog header={`${props.userActeurData.nom}`} position="right" visible={props.dialogVisibleUserData} style={{ width: '50vw' }}  onHide={() => props.hideDialogUserData()}>
        <CContainer>
         {
          userInformation && ( 
            <CRow>
                <CCol xs={12} md={4} >
                    <Avatar image={userInformation.image && userInformation.image.avatar1} className="mr-2" size="xlarge" shape="circle" />
                </CCol>
                <CCol xs={12}  md={8} className="userCardInfos-info-container" >
                    <p className="userCardInfos-info" >
                        Treichville
                    </p>
                </CCol>
            </CRow>
        
        
        )}

        </CContainer>


     </Dialog>

  )
}

export default DialogActeurDetail
