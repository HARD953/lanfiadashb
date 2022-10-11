import React, { useState, useEffect, useRef } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';

import './DataTableDemo.css';

import {
    CCol,
    CRow,
    CContainer,
    CSpinner,
  
  } from '@coreui/react'

import DataTableCrudAffectations from '../../components/Tables/Tables-crud-affectations/DataTableCrudAffectations';
import DataTableCrudAffectationsA from '../../components/Tables/Tables-crud-affectations/DataTableCrudAffectationsA';



const Affectations = () => {

    
const [activeIndex1, setActiveIndex1] = useState(0);

return(
    <CContainer>

    <div className="card p-3 mt-2">
    <h5><span className=''></span> Zones - Affectations </h5> 
 

    <TabView activeIndex={activeIndex1} onTabChange={(e) => setActiveIndex1(e.index)}>


        <TabPanel header="Zones">  
    
   
                <CContainer>
                <div  className="d-flex" style={{justifyContent:"space-between"}}>
    

                </div>
                <CRow>
                
                    <CCol xs={12}>
                    <DataTableCrudAffectations acteursTitle="Zones" detailUrl="/dashboard/details/acteuragent"/>
                    </CCol>
                
                </CRow>
                </CContainer>


        

        </TabPanel>
        
        <TabPanel header="Affectations">

            
        <CContainer>
                <div  className="d-flex" style={{justifyContent:"space-between"}}>
    

                </div>
                <CRow>
                
                    <CCol xs={12}>
                    <DataTableCrudAffectationsA acteursTitle="Affectations" detailUrl="/dashboard/details/acteuragent"/>
                    </CCol>
                
                </CRow>
        </CContainer>



        </TabPanel>


    </TabView>
</div>
</CContainer>
)

}

export default Affectations
