import React from "react"
import CIcon from '@coreui/icons-react'
import {
    CCol,
    CRow,
    CContainer,
  
  } from '@coreui/react'

import {cilHome} from '@coreui/icons'

import './CardChartLine.css'
import LineChart from "./LineChart"

const CardChartLine = ()=>{

    return(
        <div className="card-chart-line" >
        
              
            <CRow className="card-chart-line-container-main">
                <CCol md={2} className="m-auto">
                    <div className=" d-flex "  >
                        <CIcon icon={cilHome} customClassName="" className="card-chart-line--icon" />
                       <h2 className="card-chart-line--titre" >
                        Evolution
                        </h2> 
                    </div>
                   
                </CCol>
                <CCol md={10} className="m-auto" >
                    <LineChart/>
                </CCol>
            </CRow>

        </div>

    )
}

export default CardChartLine