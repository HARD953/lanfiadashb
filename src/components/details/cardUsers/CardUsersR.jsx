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
import { element } from 'prop-types';




const productService = new ProductService();




const CardUsersR = (props) => {


    
    const [valu,setValu]=useState([])

    useEffect(() => {

    
        productService.getDetailsIndividus(props.infoAdmin).then(data => setValu(data));
       
    }, []); 


    document.body.onload = addElement;
    
  const [k,setK] = useState(0)

function addElement(key,val) {

  
        
    
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(key+' : '+ val);

  // add the text node to the newly created div

  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM

 
  document.getElementById("ajout").appendChild(newDiv) 


  
         
          

}


function aff(){

     
    for(let key in valu?.[0]) {
       
        addElement(key, valu?.[0][key])
      
       
        }
        return 0
     

}


useEffect(()=>{
    aff()
}, [k]);


const myTimeout = setTimeout(function(){
    setK(1)
}, 1000);


    

   
    

 
  return (
     <div className="container">
        <h5 style={{fontWeight:'bold'}} >Informations sur {props.type}</h5>
        <div className="card-user p-3">
        
<p  id='ajout'></p> 
              
          
      

        </div>
     </div>

  )



}


export default CardUsersR
