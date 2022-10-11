import React from "react"
import CIcon from '@coreui/icons-react'
import {
    CCol,
    CRow,
    CContainer,
  
  } from '@coreui/react'

import {cilHome} from '@coreui/icons'

import './CardChartBar.css'
import BarChart from "./BarChart"

const CardChartBar = (props)=>{
   
    return(
        <div className="card-chart-line" >
        
              
            <CRow className="card-chart-line-container-main">
                <CCol md={2} className="m-auto">
                    <div className=" d-flex " >
                        <CIcon icon={cilHome} customClassName="" className="card-chart-line--icon" />
                       <h5 className="" >
                       {props.libelle}
                        </h5> 
                    </div>
                   
                </CCol>
                <CCol md={10} className="m-auto" >
                    <BarChart label={props.label} valeur={props.valeur}/>
                </CCol>
            </CRow>

        </div>

    )
}

export default CardChartBar