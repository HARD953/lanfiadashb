import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilGraph, cilHome} from '@coreui/icons'

import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';


import CardChartCicle from '../../components/home/card-chart-circle/CardChartCicle'
import CardChartLine from '../../components/home/card-chart-line/CardChartLine'
import CardChartBar from '../../components/home/card-chart-bar/CardChartBar'
import { useEffect } from 'react'
import axiosIntance from '../../api/axiosInstance'



const Statistiques = () => {

  const [userAdminData,setUserAdminData] = useState([])

  const [menage,setMenage] = useState([])
  const [individuel,setIndividuel] = useState([])

  const [villeC,setVilleC] = useState([])
  const [nombreC,setNombreC] = useState([])

  const [villeE,setVilleE] = useState([])
  const [nombreE,setNombreE] = useState([])

  const [villeN,setVilleN] = useState([])
  const [nombreN,setNombreN] = useState([])

  const [villeP,setVilleP] = useState([])
  const [nombreP,setNombreP] = useState([])

  //Individus

  
  const [villeCi,setVilleCi] = useState([])
  const [nombreCi,setNombreCi] = useState([])

  const [villeEi,setVilleEi] = useState([])
  const [nombreEi,setNombreEi] = useState([])

  const [villeNi,setVilleNi] = useState([])
  const [nombreNi,setNombreNi] = useState([])

  const [villePi,setVillePi] = useState([])
  const [nombrePi,setNombrePi] = useState([])


  const [activeIndex1, setActiveIndex1] = useState(0);




  //Administrateurs

  useEffect(()=>{
    axiosIntance.get('detailadimn/')
    .then((res)=>{
      setUserAdminData(res.data.data[0])

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


//Vulnérabilités Stat Menage


  useEffect(()=>{
    axiosIntance.get('staticirclem/')
    .then((res)=>{
      setMenage(res.data.menage)

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //Vulnérabilités Stat Individuel


  useEffect(()=>{
    axiosIntance.get('staticirclei/')
    .then((res)=>{
      
      setIndividuel(res.data.individu)

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //Stats

var i=0
var j=0
let allVille =[]
let allNombre = []


//Stats Bar Ménage

  useEffect(()=>{
    axiosIntance.get('statibarm/')
    .then((res)=>{
     
      if(i<1){

      for(let ville in res.data.menage.condition)
      {
        allVille.push(ville)
        allNombre.push(res.data.menage.condition[ville])

       
     
      }
      setVilleC(allVille)
      setNombreC(allNombre)
      allVille=[]
      allNombre=[]
     

      i=i+1

    }
    if(i==1){

      for(let ville in res.data.menage.physique)
      {
        allVille.push(ville)
        allNombre.push(res.data.menage.physique[ville])

       
     
      }
      setVilleP(allVille)
      setNombreP(allNombre)
      allVille=[]
      allNombre=[]

      i=i+1
      
    }
    if(i==2){

      for(let ville in res.data.menage.etude)
      {
        allVille.push(ville)
        allNombre.push(res.data.menage.etude[ville])

       
     
      }
      setVilleE(allVille)
      setNombreE(allNombre)
      allVille=[]
      allNombre=[]

      i=i+1
      
    }
    if(i==3){

      for(let ville in res.data.menage.emploi)
      {
        allVille.push(ville)
        allNombre.push(res.data.menage.emploi[ville])

       
     
      }
      setVilleN(allVille)
      setNombreN(allNombre)
      allVille=[]
      allNombre=[]

      i=i+1
      
    }
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  
// Stats Bar Individus

  useEffect(()=>{
    axiosIntance.get('statibari/')
    .then((res)=>{
      console.log(res)
      if(j<1){

      for(let ville in res.data.individu.condition)
      {
        allVille.push(ville)
        allNombre.push(res.data.individu.condition[ville])

       
     
      }
      setVilleCi(allVille)
      setNombreCi(allNombre)
      allVille=[]
      allNombre=[]
     

      j=j+1

    }
    if(j==1){

      for(let ville in res.data.individu.physique)
      {
        allVille.push(ville)
        allNombre.push(res.data.individu.physique[ville])

       
     
      }
      setVillePi(allVille)
      setNombrePi(allNombre)
      allVille=[]
      allNombre=[]

      j=j+1
      
    }
    if(j==2){

      for(let ville in res.data.individu.etude)
      {
        allVille.push(ville)
        allNombre.push(res.data.individu.etude[ville])

       
     
      }
      setVilleEi(allVille)
      setNombreEi(allNombre)
      allVille=[]
      allNombre=[]

      j=j+1
      
    }
    if(j==3){

      for(let ville in res.data.individu.emploi)
      {
        allVille.push(ville)
        allNombre.push(res.data.individu.emploi[ville])

       
     
      }
      setVilleNi(allVille)
      setNombreNi(allNombre)
      allVille=[]
      allNombre=[]

      j=j+1
      
    }
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  




     

  return (
   
    <CContainer >
      <div className="">
        <h2 className="mb-4  " style={{fontWeight:"bold",color:"blue"}} >
        <CIcon icon={cilGraph} height={30} customClassName="" className="me-3" />
        Statistiques
    
        </h2>
      </div>
      <CRow>
        
        <CCol  className='mt-3 mt-md-0' md={6}>
          <CardChartCicle libelle ="Individus" individuel={individuel} />
        </CCol>
        
        <CCol className='mt-3 mt-md-0'  md={6}>
          <CardChartCicle libelle="Ménages" menage={menage}/>
        </CCol>
      
      </CRow>
      <div className="card p-3 mt-2">
                <h5><span className=''></span>Vulnérabilités par commune <a style={{float:'right',textDecoration:'none',fontSize:15}} className='float-right' href='/dashboard/statistiques' > </a></h5> 
             

                <TabView activeIndex={activeIndex1} onTabChange={(e) => setActiveIndex1(e.index)}>
                    <TabPanel header="Individus">

                    <CRow className="mt-3">

                            <CCol className="mt-3">
                              <CardChartBar libelle="Cond-vie" label ={villeCi} valeur={nombreCi}/>
                            </CCol>
                            <CCol className="mt-3">
                              <CardChartBar libelle="Sans-emploi" label ={villeNi} valeur={nombreNi}/>
                            </CCol>
                    </CRow>
                    <CRow className="mt-3">
                            <CCol className="mt-3">
                              <CardChartBar libelle="Niveau Etude" label ={villeEi} valeur={nombreEi}/>
                            </CCol>                  
                            <CCol className="mt-3">
                              <CardChartBar libelle="Physique" label ={villePi} valeur={nombrePi}/>
                            </CCol>
                    </CRow>

                    </TabPanel>
                    
                    <TabPanel header="Ménages">

                            <CRow className="mt-3">
                                  <CCol className="mt-3">
                                    <CardChartBar libelle="Cond-vie" label ={villeC} valeur={nombreC}/>
                                  </CCol>
                              
                              
                                  <CCol className="mt-3">
                                    <CardChartBar libelle="Sans-emploi" label ={villeN} valeur={nombreN}/>
                                  </CCol>
                                </CRow>
                                <CRow className="mt-3">
                                  <CCol className="mt-3">
                                    <CardChartBar libelle="Niveau Etude" label ={villeE} valeur={nombreE}/>
                                  </CCol>
                          
                                  <CCol className="mt-3">
                                    <CardChartBar libelle="Physique" label ={villeP} valeur={nombreP}/>
                                  </CCol>
                            </CRow>

                    </TabPanel>
                </TabView>
            </div>

    

    </CContainer>
  
  )
}

export default Statistiques
