import React from "react"
import CIcon from '@coreui/icons-react'
import {
    CCol,
    CRow,
    CContainer,
  
  } from '@coreui/react'

import {cilHome} from '@coreui/icons'

import './CardChartCicle.css'
import DoughnutChart from "./DoughnutChart"
import DoughnutChartM from "./DoughnutChartM"

const CardChartCicle = (props)=>{

    if(props.libelle==="Individus"){
       

    return(
        <div className="card-chart-cicle" >
        
              
            <CRow className="card-chart-cicle-container-main">
                <CCol md={6} className="">
                <p className="">
                        <CIcon icon={cilHome} customClassName="" className="card-chart-cicle--icon" />
                       <span className="card-chart-cicle--titre" >
                        Vulnérabilités-Individus
                        </span> 
                    </p>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>Physique</p>
                        </div>
                        <div className="">
                            <p>{props.individuel.physique}</p>
                        </div>

                    </div>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>Conditions de vie</p>
                        </div>
                        <div className="">
                            <p>{props.individuel.condition}</p>
                        </div>

                    </div>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>Sans-emplois</p>
                        </div>
                        <div className="">
                            <p>{props.individuel.occupation}</p>
                        </div>

                    </div>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>Niveau d'Etude</p>
                        </div>
                        <div className="">
                            <p>{props.individuel.etude}</p>
                        </div>

                    </div>
                </CCol>
                <CCol md={6} className="m-auto" >
                    <DoughnutChart data={props}/>
                </CCol>
            </CRow>

        </div>

    )
    }
    else
    {
        return(
            <div className="card-chart-cicle" >
            
                  
                <CRow className="card-chart-cicle-container-main">
                    <CCol md={6} className="">
                    <p className="">
                            <CIcon icon={cilHome} customClassName="" className="card-chart-cicle--icon" />
                           <span className="card-chart-cicle--titre" >
                            Vulnérabilités-Ménages
                            </span> 
                        </p>
                        <div className="d-flex" style={{justifyContent:"space-between"}} >
                            <div className="">
                                <p>Physique</p>
                            </div>
                            <div className="">
                                <p>{props.menage.physique}</p>
                            </div>
    
                        </div>
                        <div className="d-flex" style={{justifyContent:"space-between"}} >
                            <div className="">
                                <p>Conditions de vie</p>
                            </div>
                            <div className="">
                                <p>{props.menage.condition}</p>
                            </div>
    
                        </div>
                        <div className="d-flex" style={{justifyContent:"space-between"}} >
                            <div className="">
                                <p>Sans-emplois</p>
                            </div>
                            <div className="">
                                <p>{props.menage.occupation}</p>
                            </div>
    
                        </div>
                        <div className="d-flex" style={{justifyContent:"space-between"}} >
                            <div className="">
                                <p>Niveau d'Etude</p>
                            </div>
                            <div className="">
                                <p>{props.menage.etude}</p>
                            </div>
    
                        </div>
                    </CCol>
                    <CCol md={6} className="m-auto" >
                       <DoughnutChartM data ={props} />
                    </CCol>
                </CRow>
    
            </div>
    
        )
    }
}

export default CardChartCicle