import React, { useState, useEffect, useRef } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import './DataTableDemo.css';
import axios from 'axios'; 

import {
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import axiosIntance from '../../api/axiosInstance'

import { ProductService } from '../../views/dons/service/ProductService';


const Objets = () => {

  const userItem = 'tokendashlanfi';
const tokenUser = localStorage.getItem(userItem)

  const productService = new ProductService();
    
const [activeIndex1, setActiveIndex1] = useState(0);




const [selectedCity1, setSelectedCity1] = useState(null);
const [selectedCity2, setSelectedCity2] = useState(null);
const [selectedCity3, setSelectedCity3] = useState(null);
const [selectedCity4, setSelectedCity4] = useState(null);
const [selectedCity5, setSelectedCity5] = useState(null);
const [selectedCity6, setSelectedCity6] = useState(null);
const [selectedCity7, setSelectedCity7] = useState(null);
const [selectedCity8, setSelectedCity8] = useState(null);
const [selectedCity9, setSelectedCity9] = useState(null);
const [selectedCity10, setSelectedCity10] = useState(null);
const [selectedCity11, setSelectedCity11] = useState(null);
const [selectedCity12, setSelectedCity12] = useState(null);
const [selectedCity13, setSelectedCity13] = useState(null);
const [selectedCity14, setSelectedCity14] = useState(null);
const [selectedCity15, setSelectedCity15] = useState(null);
const [selectedCity16, setSelectedCity16] = useState(null);
const [selectedCity17, setSelectedCity17] = useState(null);
const [selectedCity20, setSelectedCity20] = useState(null);
const [selectedCity21, setSelectedCity21] = useState(null);
const [selectedCity29, setSelectedCity29] = useState(null);
const [selectedCity30, setSelectedCity30] = useState(null);
const [selectedCity31, setSelectedCity31] = useState(null);
const [selectedCity22, setSelectedCity22] = useState(null);
const [selectedCity23, setSelectedCity23] = useState(null);
const [selectedCity24, setSelectedCity24] = useState(null);
const [selectedCity25, setSelectedCity25] = useState(null);
const [selectedCity26, setSelectedCity26] = useState(null);
const [selectedCity27, setSelectedCity27] = useState(null);
const [selectedCity28, setSelectedCity28] = useState(null);
const [selectedCity18, setSelectedCity18] = useState(null);
const [selectedCity19, setSelectedCity19] = useState(null);
const [selectedCity32, setSelectedCity32] = useState(null);
const [selectedCity33, setSelectedCity33] = useState(null);
const [selectedCity34, setSelectedCity34] = useState(null);
const [selectedCity35, setSelectedCity35] = useState(null);
const [selectedCity36, setSelectedCity36] = useState(null);
const [selectedCity37, setSelectedCity37] = useState(null);
const [selectedCity38, setSelectedCity38] = useState(null);
const [selectedCity39, setSelectedCity39] = useState(null);
const [selectedCity40, setSelectedCity40] = useState(null);
const [selectedCity41, setSelectedCity41] = useState(null);
const [selectedCity42, setSelectedCity42] = useState(null);
const [selectedCity43, setSelectedCity43] = useState(null);
const [selectedCity44, setSelectedCity44] = useState(null);
const [selectedCity45, setSelectedCity45] = useState(null);
const [selectedCity46, setSelectedCity46] = useState(null);
const [selectedCity47, setSelectedCity47] = useState(null);
const [selectedCity48, setSelectedCity48] = useState(null);
const [selectedCity49, setSelectedCity49] = useState(null);
const [selectedCity50, setSelectedCity50] = useState(null);
const [selectedCity51, setSelectedCity51] = useState(null);
const [selectedCity52, setSelectedCity52] = useState(null);
const [selectedCity53, setSelectedCity53] = useState(null);
const [selectedCity54, setSelectedCity54] = useState(null);
const [selectedCity55, setSelectedCity55] = useState(null);
const [selectedCity56, setSelectedCity56] = useState(null);
const [selectedCity57, setSelectedCity57] = useState(null);
const [selectedCity58, setSelectedCity58] = useState(null);
const [selectedCity59, setSelectedCity59] = useState(null);
const [selectedCity60, setSelectedCity60] = useState(null);
const [selectedCity61, setSelectedCity61] = useState(null);
const [selectedCity62, setSelectedCity62] = useState(null);
const [selectedCity63, setSelectedCity63] = useState(null);
const [selectedCity64, setSelectedCity64] = useState(null);
const [selectedCity65, setSelectedCity65] = useState(null);
const [selectedCity66, setSelectedCity66] = useState(null);
const [selectedCity67, setSelectedCity67] = useState(null);
const [selectedCity68, setSelectedCity68] = useState(null);
const [selectedCity69, setSelectedCity69] = useState(null);
const [selectedCity70, setSelectedCity70] = useState(null);
const [selectedCity71, setSelectedCity71] = useState(null);
const [selectedCity72, setSelectedCity72] = useState(null);
const [selectedCity73, setSelectedCity73] = useState(null);
const [selectedCity74, setSelectedCity74] = useState(null);
const [selectedCity75, setSelectedCity75] = useState(null);
const [selectedCity76, setSelectedCity76] = useState(null);
const [selectedCity77, setSelectedCity77] = useState(null);
const [selectedCity78, setSelectedCity78] = useState(null);
const [selectedCity79, setSelectedCity79] = useState(null);
const [selectedCity80, setSelectedCity80] = useState(null);
const [selectedCity81, setSelectedCity81] = useState(null);
const [selectedCity82, setSelectedCity82] = useState(null);
const [selectedCity83, setSelectedCity83] = useState(null);
const [selectedCity84, setSelectedCity84] = useState(null);
const [selectedCity85, setSelectedCity85] = useState(null);
const [selectedCity86, setSelectedCity86] = useState(null);
const [selectedCity87, setSelectedCity87] = useState(null);
const [selectedCity88, setSelectedCity88] = useState(null);
const [selectedCity89, setSelectedCity89] = useState(null);
const [selectedCity90, setSelectedCity90] = useState(null);
const [selectedCity91, setSelectedCity91] = useState(null);
const [selectedCity92, setSelectedCity92] = useState(null);
const [selectedCity93, setSelectedCity93] = useState(null);
const [selectedCity94, setSelectedCity94] = useState(null);
const [selectedCity95, setSelectedCity95] = useState(null);
const [selectedCity96, setSelectedCity96] = useState(null);
const [selectedCity97, setSelectedCity97] = useState(null);
const [selectedCity98, setSelectedCity98] = useState(null);
const [selectedCity99, setSelectedCity99] = useState(null);
const [selectedCity100, setSelectedCity100] = useState(null);
const [selectedCity101, setSelectedCity101] = useState(null);
const [selectedCity102, setSelectedCity102] = useState(null);
const [selectedCity103, setSelectedCity103] = useState(null);
const [selectedCity104, setSelectedCity104] = useState(null);
const [selectedCity105, setSelectedCity105] = useState(null);
const [selectedCity106, setSelectedCity106] = useState(null);
const [selectedCity107, setSelectedCity107] = useState(null);
const [selectedCity108, setSelectedCity108] = useState(null);
const [selectedCity109, setSelectedCity109] = useState(null);
const [selectedCity110, setSelectedCity110] = useState(null);
const [selectedCity111, setSelectedCity111] = useState(null);
const [selectedCity112, setSelectedCity112] = useState(null);
const [selectedCity113, setSelectedCity113] = useState(null);
const [selectedCity114, setSelectedCity114] = useState(null);
const [selectedCity115, setSelectedCity115] = useState(null);
const [selectedCity116, setSelectedCity116] = useState(null);
const [selectedCity117, setSelectedCity117] = useState(null);
const [selectedCity118, setSelectedCity118] = useState(null);
const [selectedCity119, setSelectedCity119] = useState(null);
const [selectedCity120, setSelectedCity120] = useState(null);
const [selectedCity121, setSelectedCity121] = useState(null);
const [selectedCity122, setSelectedCity122] = useState(null);
const [selectedCity123, setSelectedCity123] = useState(null);
const [selectedCity124, setSelectedCity124] = useState(null);
const [selectedCity125, setSelectedCity125] = useState(null);
const [selectedCity126, setSelectedCity126] = useState(null);
const [selectedCity127, setSelectedCity127] = useState(null);
const [selectedCity128, setSelectedCity128] = useState(null);
const [selectedCity129, setSelectedCity129] = useState(null);
const [selectedCity130, setSelectedCity130] = useState(null);


const cities = [
    { name: '0', code: '0' },
    { name: '1', code: '1' },
    { name: '2', code: '2' },
 
];

// Chef Menage
const tabtest =[parseInt(selectedCity1?.code),parseInt(selectedCity2?.code),parseInt(selectedCity3?.code)]


const tabtest2 =[parseInt(selectedCity4?.code),parseInt(selectedCity5?.code),parseInt(selectedCity6?.code)]

const tabtest3 =[parseInt(selectedCity7?.code),parseInt(selectedCity8?.code),parseInt(selectedCity9?.code)]

const tabtest4 =[parseInt(selectedCity10?.code),parseInt(selectedCity11?.code),parseInt(selectedCity12?.code)]


const tabtest5 =[parseInt(selectedCity13?.code),parseInt(selectedCity14?.code),parseInt(selectedCity15?.code)]


const tabtest6 =[parseInt(selectedCity16?.code),parseInt(selectedCity17?.code),parseInt(selectedCity18?.code)]


const tabtest7 =[parseInt(selectedCity19?.code),parseInt(selectedCity20?.code),parseInt(selectedCity21?.code)]


let emptyProduct = 
{
  "sexeChef": tabtest,
  "agechef": tabtest2,
  "nationalite": tabtest3,
  "niveauEtude": tabtest4,
  "maladie": tabtest5,
  "handicap": tabtest6,
  "occupations": tabtest7
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudchef/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct]); 





// Charge
const tabtest8 =[parseInt(selectedCity22?.code),parseInt(selectedCity23?.code),parseInt(selectedCity24?.code)]


const tabtest9 =[parseInt(selectedCity25?.code),parseInt(selectedCity26?.code),parseInt(selectedCity27?.code)]

const tabtest10 =[parseInt(selectedCity28?.code),parseInt(selectedCity29?.code),parseInt(selectedCity30?.code)]

const tabtest11 =[parseInt(selectedCity31?.code),parseInt(selectedCity32?.code),parseInt(selectedCity33?.code)]


const tabtest12 =[parseInt(selectedCity34?.code),parseInt(selectedCity35?.code),parseInt(selectedCity36?.code)]


let emptyProduct1 = 
{
  
  "agec": tabtest8,
 
  "niveauEtude": tabtest9,
  "maladie": tabtest10,
  "handicap": tabtest11,
  "occupations": tabtest12
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudch/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct1
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct1]);

//fin



// Enfant
const tabtest13 =[parseInt(selectedCity37?.code),parseInt(selectedCity38?.code),parseInt(selectedCity39?.code)]


const tabtest14 =[parseInt(selectedCity40?.code),parseInt(selectedCity41?.code),parseInt(selectedCity42?.code)]

const tabtest15 =[parseInt(selectedCity43?.code),parseInt(selectedCity44?.code),parseInt(selectedCity45?.code)]

const tabtest16 =[parseInt(selectedCity46?.code),parseInt(selectedCity47?.code),parseInt(selectedCity48?.code)]


let emptyProduct2 = 
{
  
  "agec": tabtest13,
 
  "niveauEtude": tabtest14,
  "maladie": tabtest15,
  "handicap": tabtest16,
 
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/cruden/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct2
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct2]);

//fin


// Conjoint
const tabtest17 =[parseInt(selectedCity49?.code),parseInt(selectedCity50?.code),parseInt(selectedCity51?.code)]


const tabtest18 =[parseInt(selectedCity52?.code),parseInt(selectedCity53?.code),parseInt(selectedCity54?.code)]

const tabtest19 =[parseInt(selectedCity55?.code),parseInt(selectedCity56?.code),parseInt(selectedCity57?.code)]

const tabtest20 =[parseInt(selectedCity58?.code),parseInt(selectedCity59?.code),parseInt(selectedCity60?.code)]


const tabtest21 =[parseInt(selectedCity61?.code),parseInt(selectedCity62?.code),parseInt(selectedCity63?.code)]


let emptyProduct3 = 
{
  
  "agec": tabtest17,
 
  "niveauEtude": tabtest18,
  "maladie": tabtest19,
  "handicap": tabtest20,
  "occupations": tabtest21
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudco/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct3
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct3]);

//fin



// Equipement
const tabtest22 =[parseInt(selectedCity88?.code),parseInt(selectedCity89?.code),parseInt(selectedCity90?.code)]

const tabtest23 =[parseInt(selectedCity91?.code),parseInt(selectedCity92?.code),parseInt(selectedCity93?.code)]

const tabtest24 =[parseInt(selectedCity94?.code),parseInt(selectedCity95?.code),parseInt(selectedCity96?.code)]


let emptyProduct4 = 
{
  

  "moyend": tabtest22,
  "equipee": tabtest23,
  "equipepo": tabtest24
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudeq/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct4
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct4]);

//fin


// Vulnérabilités

const tabtest25 =[parseInt(selectedCity97?.code),parseInt(selectedCity98?.code),parseInt(selectedCity99?.code)]

const tabtest26 =[parseInt(selectedCity100?.code),parseInt(selectedCity101?.code),parseInt(selectedCity102?.code)]

const tabtest27 =[parseInt(selectedCity103?.code),parseInt(selectedCity104?.code),parseInt(selectedCity105?.code)]

const tabtest28 =[parseInt(selectedCity106?.code),parseInt(selectedCity107?.code),parseInt(selectedCity108?.code)]


let emptyProduct5 = 
{
  

  "conditionvie": tabtest25,
  "conditionphy": tabtest26,
  "conditionoccup": tabtest27,
  "conditionnivee": tabtest28
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudge/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct5
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct5]);

//fin



// Ménage

const tabtest29 =[parseInt(selectedCity109?.code),parseInt(selectedCity110?.code),parseInt(selectedCity111?.code)]

const tabtest30 =[parseInt(selectedCity112?.code),parseInt(selectedCity113?.code),parseInt(selectedCity114?.code)]

const tabtest31 =[parseInt(selectedCity115?.code),parseInt(selectedCity116?.code),parseInt(selectedCity117?.code)]

const tabtest32 =[parseInt(selectedCity118?.code),parseInt(selectedCity119?.code),parseInt(selectedCity120?.code)]


let emptyProduct6 = 
{
  

  "moyenneage": tabtest29,
  "niveauEtudeM": tabtest30,
  "typeMenage": tabtest31,
  "occupations": tabtest32
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudme/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct6
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct6]);

//fin


// Habitat

const tabtest35 =[parseInt(selectedCity64?.code),parseInt(selectedCity65?.code),parseInt(selectedCity66?.code)]

const tabtest36 =[parseInt(selectedCity67?.code),parseInt(selectedCity68?.code),parseInt(selectedCity69?.code)]

const tabtest37 =[parseInt(selectedCity70?.code),parseInt(selectedCity71?.code),parseInt(selectedCity72?.code)]

const tabtest38 =[parseInt(selectedCity73?.code),parseInt(selectedCity74?.code),parseInt(selectedCity75?.code)]

const tabtest39 =[parseInt(selectedCity76?.code),parseInt(selectedCity77?.code),parseInt(selectedCity78?.code)]

const tabtest40 =[parseInt(selectedCity79?.code),parseInt(selectedCity80?.code),parseInt(selectedCity81?.code)]

const tabtest41 =[parseInt(selectedCity82?.code),parseInt(selectedCity83?.code),parseInt(selectedCity84?.code)]

const tabtest42 =[parseInt(selectedCity85?.code),parseInt(selectedCity86?.code),parseInt(selectedCity87?.code)]



let emptyProduct8 = 
{ 
"eclairage": tabtest35,
"cuisson": tabtest36,
"aeaux": tabtest37, 
"ordure": tabtest38,
"nombrep": tabtest39, 
"aisance": tabtest40, 
"loyer": tabtest41, 
"typelogement": tabtest42 
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudcom/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct8
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct8]);

//fin



// Habitat

const tabtest33 =[parseInt(selectedCity121?.code),parseInt(selectedCity122?.code),parseInt(selectedCity123?.code)]

const tabtest34 =[parseInt(selectedCity124?.code),parseInt(selectedCity125?.code),parseInt(selectedCity126?.code)]



let emptyProduct7 = 
{
  

  "ville": tabtest33,
  "quartier": tabtest34,
 
}

useEffect(() => {
    


var config = {
  method: 'put',
  url: 'https://apivulnerable.herokuapp.com/crudha/1/',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tokenUser
  },
  data : emptyProduct7
};

axios(config)

.catch(function (error) {
  console.log(error);
});

}, [emptyProduct7]);

//fin






const onCityChange2 = (e) => {
  
  tabtest.splice(1, 1, parseInt(e.value.code));

    setSelectedCity2(e.value);
}

const onCityChange1 = (e) => {

  tabtest.splice(0, 1, parseInt(e.value.code));

    setSelectedCity1(e.value);
}


const onCityChange3 = (e) => {

  tabtest.splice(2, 1, parseInt(e.value.code));

    setSelectedCity3(e.value);
}


const onCityChange4 = (e) => {

  tabtest2.splice(0, 1, parseInt(e.value.code));
    setSelectedCity4(e.value);
}
const onCityChange5 = (e) => {

  tabtest2.splice(1, 1, parseInt(e.value.code));
    setSelectedCity5(e.value);
} 
const onCityChange6 = (e) => {

  tabtest2.splice(2, 1, parseInt(e.value.code));
    setSelectedCity6(e.value);
}
const onCityChange7 = (e) => {
  
  tabtest3.splice(0, 1, parseInt(e.value.code));
    setSelectedCity7(e.value);
}
const onCityChange8 = (e) => {

  tabtest3.splice(1, 1, parseInt(e.value.code));
    setSelectedCity8(e.value);
}
const onCityChange9 = (e) => {
  
  tabtest3.splice(2, 1, parseInt(e.value.code));
    setSelectedCity9(e.value);
}
const onCityChange10 = (e) => {

  tabtest4.splice(0, 1, parseInt(e.value.code));
    setSelectedCity10(e.value);
}
const onCityChange11 = (e) => {

  tabtest4.splice(1, 1, parseInt(e.value.code));
    setSelectedCity11(e.value);
}
const onCityChange12 = (e) => {

  tabtest4.splice(2, 1, parseInt(e.value.code));
    setSelectedCity12(e.value);
}
const onCityChange13 = (e) => {

  tabtest5.splice(0, 1, parseInt(e.value.code));
    setSelectedCity13(e.value);
}
const onCityChange14 = (e) => {

  tabtest5.splice(1, 1, parseInt(e.value.code));
    setSelectedCity14(e.value);
}
const onCityChange15 = (e) => {

  tabtest5.splice(2, 1, parseInt(e.value.code));
    setSelectedCity15(e.value);
}
const onCityChange16 = (e) => {

  tabtest6.splice(0, 1, parseInt(e.value.code));
    setSelectedCity16(e.value);
}
const onCityChange17 = (e) => {

  tabtest6.splice(1, 1, parseInt(e.value.code));
    setSelectedCity17(e.value);
}
const onCityChange18 = (e) => {

  tabtest6.splice(2, 1, parseInt(e.value.code));
    setSelectedCity18(e.value);
}
const onCityChange19 = (e) => {
  
  tabtest7.splice(0, 1, parseInt(e.value.code));
    setSelectedCity19(e.value);
}


const onCityChange20 = (e) => {
  
  tabtest7.splice(1, 1, parseInt(e.value.code));
    setSelectedCity20(e.value);
}
const onCityChange21 = (e) => {
  
  tabtest7.splice(2, 1, parseInt(e.value.code));
    setSelectedCity21(e.value);
}
const onCityChange22 = (e) => {

    setSelectedCity22(e.value);
}
const onCityChange23 = (e) => {

    setSelectedCity23(e.value);
}
const onCityChange24 = (e) => {

    setSelectedCity24(e.value);
}
const onCityChange25 = (e) => {

    setSelectedCity25(e.value);
}
const onCityChange26 = (e) => {

    setSelectedCity26(e.value);
}
const onCityChange27 = (e) => {

    setSelectedCity27(e.value);
}
const onCityChange28 = (e) => {

    setSelectedCity28(e.value);
}
const onCityChange29 = (e) => {

    setSelectedCity29(e.value);
}
const onCityChange30 = (e) => {

    setSelectedCity30(e.value);
}
const onCityChange31 = (e) => {

    setSelectedCity31(e.value);
}
const onCityChange32 = (e) => {

    setSelectedCity32(e.value);
}
const onCityChange33 = (e) => {

    setSelectedCity33(e.value);
}
const onCityChange34 = (e) => {

    setSelectedCity34(e.value);
}
const onCityChange35 = (e) => {

    setSelectedCity35(e.value);
}
const onCityChange36 = (e) => {

    setSelectedCity36(e.value);
}
const onCityChange37 = (e) => {

    setSelectedCity37(e.value);
}
const onCityChange38 = (e) => {

    setSelectedCity38(e.value);
}
const onCityChange39 = (e) => {

    setSelectedCity39(e.value);
}
const onCityChange40 = (e) => {

    setSelectedCity40(e.value);
}
const onCityChange41 = (e) => {

    setSelectedCity41(e.value);
}
const onCityChange42 = (e) => {

    setSelectedCity42(e.value);
}
const onCityChange43 = (e) => {

    setSelectedCity43(e.value);
}
const onCityChange44 = (e) => {

    setSelectedCity44(e.value);
}
const onCityChange45 = (e) => {

    setSelectedCity45(e.value);
}
const onCityChange46 = (e) => {

    setSelectedCity46(e.value);
}
const onCityChange47 = (e) => {

    setSelectedCity47(e.value);
}
const onCityChange48 = (e) => {

    setSelectedCity48(e.value);
}
const onCityChange49 = (e) => {

    setSelectedCity49(e.value);
}
const onCityChange50 = (e) => {

    setSelectedCity50(e.value);
}
const onCityChange51 = (e) => {

    setSelectedCity51(e.value);
}
const onCityChange52 = (e) => {

    setSelectedCity52(e.value);
}
const onCityChange53 = (e) => {

    setSelectedCity53(e.value);
}
const onCityChange54 = (e) => {

    setSelectedCity54(e.value);
}
const onCityChange55 = (e) => {

    setSelectedCity55(e.value);
}
const onCityChange56 = (e) => {

    setSelectedCity56(e.value);
}
const onCityChange57 = (e) => {

    setSelectedCity57(e.value);
}
const onCityChange58 = (e) => {

    setSelectedCity58(e.value);
}
const onCityChange59 = (e) => {

    setSelectedCity59(e.value);
}
const onCityChange60 = (e) => {

    setSelectedCity60(e.value);
}
const onCityChange61 = (e) => {

    setSelectedCity61(e.value);
}
const onCityChange62 = (e) => {

    setSelectedCity62(e.value);
}
const onCityChange63 = (e) => {

    setSelectedCity63(e.value);
}
const onCityChange64 = (e) => {

    setSelectedCity64(e.value);
}
const onCityChange65 = (e) => {

 
 setSelectedCity65(e.value);
}
const onCityChange66 = (e) => {

    setSelectedCity66(e.value);
}
const onCityChange68 = (e) => {

    setSelectedCity68(e.value);
}
const onCityChange67 = (e) => {

    setSelectedCity67(e.value);
}
const onCityChange69 = (e) => {

    setSelectedCity69(e.value);
}

const onCityChange80 = (e) => {

    setSelectedCity80(e.value);
}
const onCityChange81 = (e) => {

    setSelectedCity81(e.value);
}
const onCityChange82 = (e) => {

    setSelectedCity82(e.value);
}
const onCityChange83 = (e) => {

    setSelectedCity83(e.value);
}
const onCityChange84 = (e) => {

    setSelectedCity84(e.value);
}
const onCityChange85 = (e) => {

    setSelectedCity85(e.value);
}
const onCityChange86 = (e) => {

    setSelectedCity86(e.value);
}
const onCityChange87 = (e) => {

    setSelectedCity87(e.value);
}
const onCityChange88 = (e) => {

    setSelectedCity88(e.value);
}
const onCityChange89 = (e) => {

    setSelectedCity89(e.value);
}
const onCityChange90 = (e) => {

    setSelectedCity90(e.value);
}
const onCityChange91 = (e) => {

    setSelectedCity91(e.value);
}
const onCityChange92 = (e) => {

    setSelectedCity92(e.value);
}
const onCityChange93 = (e) => {

    setSelectedCity93(e.value);
}
const onCityChange94 = (e) => {

    setSelectedCity94(e.value);
}
const onCityChange95 = (e) => {

    setSelectedCity95(e.value);
}
const onCityChange96 = (e) => {

    setSelectedCity96(e.value);
}
const onCityChange97 = (e) => {

    setSelectedCity97(e.value);
}
const onCityChange98 = (e) => {

    setSelectedCity98(e.value);
}
const onCityChange99 = (e) => {

    setSelectedCity99(e.value);
}
const onCityChange100 = (e) => {

    setSelectedCity100(e.value);
}
const onCityChange101 = (e) => {

    setSelectedCity101(e.value);
}
const onCityChange102 = (e) => {

    setSelectedCity102(e.value);
}
const onCityChange103 = (e) => {

    setSelectedCity103(e.value);
}
const onCityChange104 = (e) => {

    setSelectedCity104(e.value);
}
const onCityChange105 = (e) => {

    setSelectedCity105(e.value);
}
const onCityChange106 = (e) => {

    setSelectedCity106(e.value);
}
const onCityChange107 = (e) => {

    setSelectedCity107(e.value);
}
const onCityChange108 = (e) => {

    setSelectedCity108(e.value);
}
const onCityChange109 = (e) => {

    setSelectedCity109(e.value);
}
const onCityChange110 = (e) => {

    setSelectedCity110(e.value);
}
const onCityChange111 = (e) => {

    setSelectedCity111(e.value);
}
const onCityChange112 = (e) => {

    setSelectedCity112(e.value);
}
const onCityChange113 = (e) => {

    setSelectedCity113(e.value);
}
const onCityChange114 = (e) => {

    setSelectedCity114(e.value);
}
const onCityChange115 = (e) => {

    setSelectedCity115(e.value);
}
const onCityChange116 = (e) => {

    setSelectedCity116(e.value);
}
const onCityChange117 = (e) => {

    setSelectedCity117(e.value);
}
const onCityChange118 = (e) => {

    setSelectedCity118(e.value);
}
const onCityChange119 = (e) => {

    setSelectedCity119(e.value);
}
const onCityChange120 = (e) => {

    setSelectedCity120(e.value);
}
const onCityChange121 = (e) => {

    setSelectedCity121(e.value);
}
const onCityChange122 = (e) => {

    setSelectedCity122(e.value);
}
const onCityChange123 = (e) => {

    setSelectedCity123(e.value);
}
const onCityChange124 = (e) => {

    setSelectedCity124(e.value);
}
const onCityChange125 = (e) => {

    setSelectedCity125(e.value);
}
const onCityChange126 = (e) => {

    setSelectedCity126(e.value);
}
const onCityChange127 = (e) => {

    setSelectedCity127(e.value);
}
 const onCityChange128 = (e) => {

    setSelectedCity128(e.value);
}
 const onCityChange129 = (e) => {

    setSelectedCity129(e.value);
}
 const onCityChange70 = (e) => {

    setSelectedCity70(e.value);
}
const onCityChange71 = (e) => {

    setSelectedCity71(e.value);
}
const onCityChange72 = (e) => {

    setSelectedCity72(e.value);
}
const onCityChange73 = (e) => {

    setSelectedCity73(e.value);
}
const onCityChange74 = (e) => {

    setSelectedCity74(e.value);
}
const onCityChange75 = (e) => {

    setSelectedCity75(e.value);
}
const onCityChange76 = (e) => {

    setSelectedCity76(e.value);
}
const onCityChange77 = (e) => {

    setSelectedCity77(e.value);
}
const onCityChange78 = (e) => {

    setSelectedCity78(e.value);
}
const onCityChange79 = (e) => {

    setSelectedCity79(e.value);
}


 //CritereChef

 var test1;

useEffect(()=>{

 axiosIntance.get('crudchef/1/')
 .then((res)=>{

  // Sexe Chef

  test1={name: ''+res.data?.sexeChef?.[0]+'', code: ''+res.data?.sexeChef?.[0]+''}

  setSelectedCity1(test1)

  test1={name: ''+res.data?.sexeChef?.[1]+'', code: ''+res.data?.sexeChef?.[1]+''}

  setSelectedCity2(test1)

  test1={name: ''+res.data?.sexeChef?.[2]+'', code: ''+res.data?.sexeChef?.[2]+''}

  setSelectedCity3(test1)

  //Age Chef

  test1={name: ''+res.data?.agechef?.[0]+'', code: ''+res.data?.agechef?.[0]+''}

  setSelectedCity4(test1)

  test1={name: ''+res.data?.agechef?.[1]+'', code: ''+res.data?.agechef?.[1]+''}

  setSelectedCity5(test1)

  test1={name: ''+res.data?.agechef?.[2]+'', code: ''+res.data?.agechef?.[2]+''}

  setSelectedCity6(test1)

   //niveauEtude

   test1={name: ''+res.data?.nationalite?.[0]+'', code: ''+res.data?.nationalite?.[0]+''}

   setSelectedCity7(test1)
 
   test1={name: ''+res.data?.nationalite?.[1]+'', code: ''+res.data?.nationalite?.[1]+''}
 
   setSelectedCity8(test1)
 
   test1={name: ''+res.data?.nationalite?.[2]+'', code: ''+res.data?.nationalite?.[2]+''}
 
   setSelectedCity9(test1)

      //Niveau Etude

      test1={name: ''+res.data?.niveauEtude?.[0]+'', code: ''+res.data?.niveauEtude?.[0]+''}

      setSelectedCity10(test1)
    
      test1={name: ''+res.data?.niveauEtude?.[1]+'', code: ''+res.data?.niveauEtude?.[1]+''}
    
      setSelectedCity11(test1)
    
      test1={name: ''+res.data?.niveauEtude?.[2]+'', code: ''+res.data?.niveauEtude?.[2]+''}
    
      setSelectedCity12(test1)

   //Maladie

   test1={name: ''+res.data?.maladie?.[0]+'', code: ''+res.data?.maladie?.[0]+''}

   setSelectedCity13(test1)
 
   test1={name: ''+res.data?.maladie?.[1]+'', code: ''+res.data?.maladie?.[1]+''}
 
   setSelectedCity14(test1)
 
   test1={name: ''+res.data?.maladie?.[2]+'', code: ''+res.data?.maladie?.[2]+''}
 
   setSelectedCity15(test1)


    //Handicap

    test1={name: ''+res.data?.handicap?.[0]+'', code: ''+res.data?.handicap?.[0]+''}

    setSelectedCity16(test1)
  
    test1={name: ''+res.data?.handicap?.[1]+'', code: ''+res.data?.handicap?.[1]+''}
  
    setSelectedCity17(test1)
  
    test1={name: ''+res.data?.handicap?.[2]+'', code: ''+res.data?.handicap?.[2]+''}
  
    setSelectedCity18(test1)



      //Occupations

      test1={name: ''+res.data?.occupations?.[0]+'', code: ''+res.data?.occupations?.[0]+''}

      setSelectedCity19(test1)
    
      test1={name: ''+res.data?.occupations?.[1]+'', code: ''+res.data?.occupations?.[1]+''}
    
      setSelectedCity20(test1)
    
      test1={name: ''+res.data?.occupations?.[2]+'', code: ''+res.data?.occupations?.[2]+''}
    
      setSelectedCity21(test1)
    
  


  })
 .catch((error)=>{
   console.log(error)
 })
},[])


// Charge

useEffect(()=>{

  axiosIntance.get('crudch/1/')
  .then((res)=>{
 

   //Agec
 
   test1={name: ''+res.data?.agec?.[0]+'', code: ''+res.data?.agec?.[0]+''}
 
   setSelectedCity22(test1)
 
   test1={name: ''+res.data?.agec?.[1]+'', code: ''+res.data?.agec?.[1]+''}
 
   setSelectedCity23(test1)
 
   test1={name: ''+res.data?.agec?.[2]+'', code: ''+res.data?.agec?.[2]+''}
 
   setSelectedCity24(test1)
 
  
 
       //Niveau Etude
 
       test1={name: ''+res.data?.niveauEtude?.[0]+'', code: ''+res.data?.niveauEtude?.[0]+''}
 
       setSelectedCity25(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[1]+'', code: ''+res.data?.niveauEtude?.[1]+''}
     
       setSelectedCity26(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[2]+'', code: ''+res.data?.niveauEtude?.[2]+''}
     
       setSelectedCity27(test1)
 
    //Maladie
 
    test1={name: ''+res.data?.maladie?.[0]+'', code: ''+res.data?.maladie?.[0]+''}
 
    setSelectedCity28(test1)
  
    test1={name: ''+res.data?.maladie?.[1]+'', code: ''+res.data?.maladie?.[1]+''}
  
    setSelectedCity29(test1)
  
    test1={name: ''+res.data?.maladie?.[2]+'', code: ''+res.data?.maladie?.[2]+''}
  
    setSelectedCity30(test1)
 
 
     //Handicap
 
     test1={name: ''+res.data?.handicap?.[0]+'', code: ''+res.data?.handicap?.[0]+''}
 
     setSelectedCity31(test1)
   
     test1={name: ''+res.data?.handicap?.[1]+'', code: ''+res.data?.handicap?.[1]+''}
   
     setSelectedCity32(test1)
   
     test1={name: ''+res.data?.handicap?.[2]+'', code: ''+res.data?.handicap?.[2]+''}
   
     setSelectedCity33(test1)
 
 
 
       //Occupations
 
       test1={name: ''+res.data?.occupations?.[0]+'', code: ''+res.data?.occupations?.[0]+''}
 
       setSelectedCity34(test1)
     
       test1={name: ''+res.data?.occupations?.[1]+'', code: ''+res.data?.occupations?.[1]+''}
     
       setSelectedCity35(test1)
     
       test1={name: ''+res.data?.occupations?.[2]+'', code: ''+res.data?.occupations?.[2]+''}
     
       setSelectedCity36(test1)
     
   
 
 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])
 

 
// Enfant

useEffect(()=>{

  axiosIntance.get('cruden/1/')
  .then((res)=>{
 

   //Agec
 
   test1={name: ''+res.data?.agec?.[0]+'', code: ''+res.data?.agec?.[0]+''}
 
   setSelectedCity37(test1)
 
   test1={name: ''+res.data?.agec?.[1]+'', code: ''+res.data?.agec?.[1]+''}
 
   setSelectedCity38(test1)
 
   test1={name: ''+res.data?.agec?.[2]+'', code: ''+res.data?.agec?.[2]+''}
 
   setSelectedCity39(test1)
 
  
 
       //Niveau Etude
 
       test1={name: ''+res.data?.niveauEtude?.[0]+'', code: ''+res.data?.niveauEtude?.[0]+''}
 
       setSelectedCity40(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[1]+'', code: ''+res.data?.niveauEtude?.[1]+''}
     
       setSelectedCity41(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[2]+'', code: ''+res.data?.niveauEtude?.[2]+''}
     
       setSelectedCity42(test1)
 
    //Maladie
 
    test1={name: ''+res.data?.maladie?.[0]+'', code: ''+res.data?.maladie?.[0]+''}
 
    setSelectedCity43(test1)
  
    test1={name: ''+res.data?.maladie?.[1]+'', code: ''+res.data?.maladie?.[1]+''}
  
    setSelectedCity44(test1)
  
    test1={name: ''+res.data?.maladie?.[2]+'', code: ''+res.data?.maladie?.[2]+''}
  
    setSelectedCity45(test1)
 
 
     //Handicap
 
     test1={name: ''+res.data?.handicap?.[0]+'', code: ''+res.data?.handicap?.[0]+''}
 
     setSelectedCity46(test1)
   
     test1={name: ''+res.data?.handicap?.[1]+'', code: ''+res.data?.handicap?.[1]+''}
   
     setSelectedCity47(test1)
   
     test1={name: ''+res.data?.handicap?.[2]+'', code: ''+res.data?.handicap?.[2]+''}
   
     setSelectedCity48(test1)
 
 
 

 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])
 

// Conjoint

useEffect(()=>{

  axiosIntance.get('crudco/1/')
  .then((res)=>{
 

   //Agec
 
   test1={name: ''+res.data?.agec?.[0]+'', code: ''+res.data?.agec?.[0]+''}
 
   setSelectedCity49(test1)
 
   test1={name: ''+res.data?.agec?.[1]+'', code: ''+res.data?.agec?.[1]+''}
 
   setSelectedCity50(test1)
 
   test1={name: ''+res.data?.agec?.[2]+'', code: ''+res.data?.agec?.[2]+''}
 
   setSelectedCity51(test1)
 
  
 
       //Niveau Etude
 
       test1={name: ''+res.data?.niveauEtude?.[0]+'', code: ''+res.data?.niveauEtude?.[0]+''}
 
       setSelectedCity52(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[1]+'', code: ''+res.data?.niveauEtude?.[1]+''}
     
       setSelectedCity53(test1)
     
       test1={name: ''+res.data?.niveauEtude?.[2]+'', code: ''+res.data?.niveauEtude?.[2]+''}
     
       setSelectedCity54(test1)
 
    //Maladie
 
    test1={name: ''+res.data?.maladie?.[0]+'', code: ''+res.data?.maladie?.[0]+''}
 
    setSelectedCity55(test1)
  
    test1={name: ''+res.data?.maladie?.[1]+'', code: ''+res.data?.maladie?.[1]+''}
  
    setSelectedCity56(test1)
  
    test1={name: ''+res.data?.maladie?.[2]+'', code: ''+res.data?.maladie?.[2]+''}
  
    setSelectedCity57(test1)
 
 
     //Handicap
 
     test1={name: ''+res.data?.handicap?.[0]+'', code: ''+res.data?.handicap?.[0]+''}
 
     setSelectedCity58(test1)
   
     test1={name: ''+res.data?.handicap?.[1]+'', code: ''+res.data?.handicap?.[1]+''}
   
     setSelectedCity59(test1)
   
     test1={name: ''+res.data?.handicap?.[2]+'', code: ''+res.data?.handicap?.[2]+''}
   
     setSelectedCity60(test1)
 
 
 
       //Occupations
 
       test1={name: ''+res.data?.occupations?.[0]+'', code: ''+res.data?.occupations?.[0]+''}
 
       setSelectedCity61(test1)
     
       test1={name: ''+res.data?.occupations?.[1]+'', code: ''+res.data?.occupations?.[1]+''}
     
       setSelectedCity62(test1)
     
       test1={name: ''+res.data?.occupations?.[2]+'', code: ''+res.data?.occupations?.[2]+''}
     
       setSelectedCity63(test1)
     
   
 
 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])




 // Equipement

useEffect(()=>{

  axiosIntance.get('crudeq/1/')
  .then((res)=>{
 

 
    //moyend
 
    test1={name: ''+res.data?.moyend?.[0]+'', code: ''+res.data?.moyend?.[0]+''}
 
    setSelectedCity88(test1)
  
    test1={name: ''+res.data?.moyend?.[1]+'', code: ''+res.data?.moyend?.[1]+''}
  
    setSelectedCity89(test1)
  
    test1={name: ''+res.data?.moyend?.[2]+'', code: ''+res.data?.moyend?.[2]+''}
  
    setSelectedCity90(test1)
 
 
     //Equipee
 
     test1={name: ''+res.data?.equipee?.[0]+'', code: ''+res.data?.equipee?.[0]+''}
 
     setSelectedCity91(test1)
   
     test1={name: ''+res.data?.equipee?.[1]+'', code: ''+res.data?.equipee?.[1]+''}
   
     setSelectedCity92(test1)
   
     test1={name: ''+res.data?.equipee?.[2]+'', code: ''+res.data?.equipee?.[2]+''}
   
     setSelectedCity93(test1)
 
 
 
       //Equipepo
 
       test1={name: ''+res.data?.equipepo?.[0]+'', code: ''+res.data?.equipepo?.[0]+''}
 
       setSelectedCity94(test1)
     
       test1={name: ''+res.data?.equipepo?.[1]+'', code: ''+res.data?.equipepo?.[1]+''}
     
       setSelectedCity95(test1)
     
       test1={name: ''+res.data?.equipepo?.[2]+'', code: ''+res.data?.equipepo?.[2]+''}
     
       setSelectedCity96(test1)
     
   
 
 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])



 // Vulnérabilités

 useEffect(()=>{

  axiosIntance.get('crudge/1/')
  .then((res)=>{
 

 
    //conditionvie
 
    test1={name: ''+res.data?.conditionvie?.[0]+'', code: ''+res.data?.conditionvie?.[0]+''}
 
    setSelectedCity97(test1)
  
    test1={name: ''+res.data?.conditionvie?.[1]+'', code: ''+res.data?.conditionvie?.[1]+''}
  
    setSelectedCity98(test1)
  
    test1={name: ''+res.data?.conditionvie?.[2]+'', code: ''+res.data?.conditionvie?.[2]+''}
  
    setSelectedCity99(test1)
 
 
     //conditionphy
 
     test1={name: ''+res.data?.conditionphy?.[0]+'', code: ''+res.data?.conditionphy?.[0]+''}
 
     setSelectedCity100(test1)
   
     test1={name: ''+res.data?.conditionphy?.[1]+'', code: ''+res.data?.conditionphy?.[1]+''}
   
     setSelectedCity101(test1)
   
     test1={name: ''+res.data?.conditionphy?.[2]+'', code: ''+res.data?.conditionphy?.[2]+''}
   
     setSelectedCity102(test1)
 
 
 
       //conditionoccup
 
       test1={name: ''+res.data?.conditionoccup?.[0]+'', code: ''+res.data?.conditionoccup?.[0]+''}
 
       setSelectedCity103(test1)
     
       test1={name: ''+res.data?.conditionoccup?.[1]+'', code: ''+res.data?.conditionoccup?.[1]+''}
     
       setSelectedCity104(test1)
     
       test1={name: ''+res.data?.conditionoccup?.[2]+'', code: ''+res.data?.conditionoccup?.[2]+''}
     
       setSelectedCity105(test1)


           //conditionnivee
 
           test1={name: ''+res.data?.conditionnivee?.[0]+'', code: ''+res.data?.conditionnivee?.[0]+''}
 
           setSelectedCity106(test1)
         
           test1={name: ''+res.data?.conditionnivee?.[1]+'', code: ''+res.data?.conditionnivee?.[1]+''}
         
           setSelectedCity107(test1)
         
           test1={name: ''+res.data?.conditionnivee?.[2]+'', code: ''+res.data?.conditionnivee?.[2]+''}
         
           setSelectedCity108(test1)
     
   
 
 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])



 
 // Habitat

 useEffect(()=>{

  axiosIntance.get('crudha/1/')
  .then((res)=>{
 

 
    //ville
 
    test1={name: ''+res.data?.ville?.[0]+'', code: ''+res.data?.ville?.[0]+''}
 
    setSelectedCity121(test1)
  
    test1={name: ''+res.data?.ville?.[1]+'', code: ''+res.data?.ville?.[1]+''}
  
    setSelectedCity122(test1)
  
    test1={name: ''+res.data?.ville?.[2]+'', code: ''+res.data?.ville?.[2]+''}
  
    setSelectedCity123(test1)
 
 
     //quartier
 
     test1={name: ''+res.data?.quartier?.[0]+'', code: ''+res.data?.quartier?.[0]+''}
 
     setSelectedCity124(test1)
   
     test1={name: ''+res.data?.quartier?.[1]+'', code: ''+res.data?.quartier?.[1]+''}
   
     setSelectedCity125(test1)
   
     test1={name: ''+res.data?.quartier?.[2]+'', code: ''+res.data?.quartier?.[2]+''}
   
     setSelectedCity126(test1)

 
 
   })
  .catch((error)=>{
    console.log(error)
  })
 },[])




  // Comodite

  useEffect(()=>{

    axiosIntance.get('crudcom/1/')
    .then((res)=>{
   
  
   
      //eclairage
   
      test1={name: ''+res.data?.eclairage?.[0]+'', code: ''+res.data?.eclairage?.[0]+''}
   
      setSelectedCity64(test1)
    
      test1={name: ''+res.data?.eclairage?.[1]+'', code: ''+res.data?.eclairage?.[1]+''}
    
      setSelectedCity65(test1)
    
      test1={name: ''+res.data?.eclairage?.[2]+'', code: ''+res.data?.eclairage?.[2]+''}
    
      setSelectedCity66(test1)
   
   
       //cuisson
   
       test1={name: ''+res.data?.cuisson?.[0]+'', code: ''+res.data?.cuisson?.[0]+''}
   
       setSelectedCity67(test1)
     
       test1={name: ''+res.data?.cuisson?.[1]+'', code: ''+res.data?.cuisson?.[1]+''}
     
       setSelectedCity68(test1)
     
       test1={name: ''+res.data?.cuisson?.[2]+'', code: ''+res.data?.cuisson?.[2]+''}
     
       setSelectedCity69(test1)

              //aeaux
   
              test1={name: ''+res.data?.aeaux?.[0]+'', code: ''+res.data?.aeaux?.[0]+''}
   
              setSelectedCity70(test1)
            
              test1={name: ''+res.data?.aeaux?.[1]+'', code: ''+res.data?.aeaux?.[1]+''}
            
              setSelectedCity71(test1)
            
              test1={name: ''+res.data?.aeaux?.[2]+'', code: ''+res.data?.aeaux?.[2]+''}
            
              setSelectedCity72(test1)

      //ordure
   
       test1={name: ''+res.data?.ordure?.[0]+'', code: ''+res.data?.ordure?.[0]+''}
   
       setSelectedCity73(test1)
     
       test1={name: ''+res.data?.ordure?.[1]+'', code: ''+res.data?.ordure?.[1]+''}
     
       setSelectedCity74(test1)
     
       test1={name: ''+res.data?.ordure?.[2]+'', code: ''+res.data?.ordure?.[2]+''}
     
       setSelectedCity75(test1)

             //nombrep
   
             test1={name: ''+res.data?.nombrep?.[0]+'', code: ''+res.data?.nombrep?.[0]+''}
   
             setSelectedCity76(test1)
           
             test1={name: ''+res.data?.nombrep?.[1]+'', code: ''+res.data?.nombrep?.[1]+''}
           
             setSelectedCity77(test1)
           
             test1={name: ''+res.data?.nombrep?.[2]+'', code: ''+res.data?.nombrep?.[2]+''}
           
             setSelectedCity78(test1)

                   //aisance
   
       test1={name: ''+res.data?.aisance?.[0]+'', code: ''+res.data?.aisance?.[0]+''}
   
       setSelectedCity79(test1)
     
       test1={name: ''+res.data?.aisance?.[1]+'', code: ''+res.data?.aisance?.[1]+''}
     
       setSelectedCity80(test1)
     
       test1={name: ''+res.data?.aisance?.[2]+'', code: ''+res.data?.aisance?.[2]+''}
     
       setSelectedCity81(test1)

             //loyer
   
             test1={name: ''+res.data?.loyer?.[0]+'', code: ''+res.data?.loyer?.[0]+''}
   
             setSelectedCity82(test1)
           
             test1={name: ''+res.data?.loyer?.[1]+'', code: ''+res.data?.loyer?.[1]+''}
           
             setSelectedCity83(test1)
           
             test1={name: ''+res.data?.loyer?.[2]+'', code: ''+res.data?.loyer?.[2]+''}
           
             setSelectedCity84(test1)

                   //typelogement
   
       test1={name: ''+res.data?.typelogement?.[0]+'', code: ''+res.data?.typelogement?.[0]+''}
   
       setSelectedCity85(test1)
     
       test1={name: ''+res.data?.typelogement?.[1]+'', code: ''+res.data?.typelogement?.[1]+''}
     
       setSelectedCity86(test1)
     
       test1={name: ''+res.data?.typelogement?.[2]+'', code: ''+res.data?.typelogement?.[2]+''}
     
       setSelectedCity87(test1)

   
     })
    .catch((error)=>{
      console.log(error)
    })
   },[])

 


   // Ménage

  useEffect(()=>{

    axiosIntance.get('crudme/1/')
    .then((res)=>{
   
  
   
      //moyenneage
   
      test1={name: ''+res.data?.moyenneage?.[0]+'', code: ''+res.data?.moyenneage?.[0]+''}
   
      setSelectedCity109(test1)
    
      test1={name: ''+res.data?.moyenneage?.[1]+'', code: ''+res.data?.moyenneage?.[1]+''}
    
      setSelectedCity110(test1)
    
      test1={name: ''+res.data?.moyenneage?.[2]+'', code: ''+res.data?.moyenneage?.[2]+''}
    
      setSelectedCity111(test1)
   
   
       //niveauEtudeM
   
       test1={name: ''+res.data?.niveauEtudeM?.[0]+'', code: ''+res.data?.niveauEtudeM?.[0]+''}
   
       setSelectedCity112(test1)
     
       test1={name: ''+res.data?.niveauEtudeM?.[1]+'', code: ''+res.data?.niveauEtudeM?.[1]+''}
     
       setSelectedCity113(test1)
     
       test1={name: ''+res.data?.niveauEtudeM?.[2]+'', code: ''+res.data?.niveauEtudeM?.[2]+''}
     
       setSelectedCity114(test1)

              //typeMenage
   
              test1={name: ''+res.data?.typeMenage?.[0]+'', code: ''+res.data?.typeMenage?.[0]+''}
   
              setSelectedCity115(test1)
            
              test1={name: ''+res.data?.typeMenage?.[1]+'', code: ''+res.data?.typeMenage?.[1]+''}
            
              setSelectedCity116(test1)
            
              test1={name: ''+res.data?.typeMenage?.[2]+'', code: ''+res.data?.typeMenage?.[2]+''}
            
              setSelectedCity117(test1)

      //occupations
   
       test1={name: ''+res.data?.occupations?.[0]+'', code: ''+res.data?.occupations?.[0]+''}
   
       setSelectedCity118(test1)
     
       test1={name: ''+res.data?.occupations?.[1]+'', code: ''+res.data?.occupations?.[1]+''}
     
       setSelectedCity119(test1)
     
       test1={name: ''+res.data?.occupations?.[2]+'', code: ''+res.data?.occupations?.[2]+''}
     
       setSelectedCity120(test1)
  
   
   
     })
    .catch((error)=>{
      console.log(error)
    })
   },[])

 



return(
    <CContainer>

    <div className="card p-3 mt-2">
    <h5><span className=''></span>Scores - Critère </h5> 
 

    <TabView activeIndex={activeIndex1} onTabChange={(e) => setActiveIndex1(e.index)}>
        <TabPanel header="Chef ménage">  
    
    <CRow>

        <CCol md={6}>
        <p>
          Sexe chef :  <Dropdown value={selectedCity1} options={cities} onChange={onCityChange1} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity2} options={cities} onChange={onCityChange2} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity3} options={cities} onChange={onCityChange3} optionLabel="name" placeholder="Score" />
        </p> 
        </CCol>

        <CCol md={6}>
        <p> Age chef : <Dropdown value={selectedCity4} options={cities} onChange={onCityChange4} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity5} options={cities} onChange={onCityChange5} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity6} options={cities} onChange={onCityChange6} optionLabel="name" placeholder="Score" /></p> ,
          </CCol>

          <CCol md={6}>
        <p>   Nationalité : <Dropdown value={selectedCity7} options={cities} onChange={onCityChange7} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity8} options={cities} onChange={onCityChange8} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity9} options={cities} onChange={onCityChange9} optionLabel="name" placeholder="Score" /></p> ,

          </CCol>

          <CCol md={6}>
        <p> Niveau Etude : <Dropdown value={selectedCity10} options={cities} onChange={onCityChange10} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity11} options={cities} onChange={onCityChange11} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity12} options={cities} onChange={onCityChange12} optionLabel="name" placeholder="Score" /></p> ,
          </CCol>
   
          <CCol md={6}>
    <p> Maladie: <Dropdown value={selectedCity13} options={cities} onChange={onCityChange13} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity14} options={cities} onChange={onCityChange14} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity15} options={cities} onChange={onCityChange15} optionLabel="name" placeholder="Score" /></p> ,
          </CCol>

          <CCol md={6}>
    <p> Handicap : <Dropdown value={selectedCity16} options={cities} onChange={onCityChange16} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity17} options={cities} onChange={onCityChange17} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity18} options={cities} onChange={onCityChange18} optionLabel="name" placeholder="Score" /></p> ,
             </CCol>

          <CCol md={6}>
    <p> Occupations : <Dropdown value={selectedCity19} options={cities} onChange={onCityChange19} optionLabel="name" placeholder="Score" />
          <Dropdown className='m-2' value={selectedCity20} options={cities} onChange={onCityChange20} optionLabel="name" placeholder="Score" />
          <Dropdown   value={selectedCity21} options={cities} onChange={onCityChange21} optionLabel="name" placeholder="Score" /></p> ,
            </CCol>

     </CRow>

        

        </TabPanel>
        
        <TabPanel header="Charge">
       
        <CRow>

<CCol md={6}>
<p>
  Age c :  <Dropdown value={selectedCity22} options={cities} onChange={onCityChange22} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity23} options={cities} onChange={onCityChange23} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity24} options={cities} onChange={onCityChange24} optionLabel="name" placeholder="Score" />
</p> 
</CCol>



  <CCol md={6}>
<p> Niveau Etude : <Dropdown value={selectedCity25} options={cities} onChange={onCityChange25} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity26} options={cities} onChange={onCityChange26} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity27} options={cities} onChange={onCityChange27} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Maladie: <Dropdown value={selectedCity28} options={cities} onChange={onCityChange28} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity29} options={cities} onChange={onCityChange29} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity30} options={cities} onChange={onCityChange30} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Handicap : <Dropdown value={selectedCity31} options={cities} onChange={onCityChange31} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity32} options={cities} onChange={onCityChange32} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity33} options={cities} onChange={onCityChange33} optionLabel="name" placeholder="Score" /></p> ,
     </CCol>

  <CCol md={6}>
<p> Occupations : <Dropdown value={selectedCity34} options={cities} onChange={onCityChange34} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity35} options={cities} onChange={onCityChange35} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity36} options={cities} onChange={onCityChange36} optionLabel="name" placeholder="Score" /></p> ,
    </CCol>
    
</CRow>


             

        </TabPanel>

        <TabPanel header="Enfant">

        <CRow>



<CCol md={6}>
<p> Age c : <Dropdown value={selectedCity37} options={cities} onChange={onCityChange37} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity38} options={cities} onChange={onCityChange38} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity39} options={cities} onChange={onCityChange39} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>



  <CCol md={6}>
<p> Niveau Etude : <Dropdown value={selectedCity40} options={cities} onChange={onCityChange40} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity41} options={cities} onChange={onCityChange41} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity42} options={cities} onChange={onCityChange42} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Maladie: <Dropdown value={selectedCity43} options={cities} onChange={onCityChange43} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity44} options={cities} onChange={onCityChange44} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity45} options={cities} onChange={onCityChange45} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Handicap : <Dropdown value={selectedCity46} options={cities} onChange={onCityChange46} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity47} options={cities} onChange={onCityChange47} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity48} options={cities} onChange={onCityChange48} optionLabel="name" placeholder="Score" /></p> ,
     </CCol>


</CRow>

             

  </TabPanel>

  <TabPanel header="Conjoint">


    <CRow>


<CCol md={6}>
<p> Age c : <Dropdown value={selectedCity49} options={cities} onChange={onCityChange49} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity50} options={cities} onChange={onCityChange50} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity51} options={cities} onChange={onCityChange51} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Niveau Etude : <Dropdown value={selectedCity52} options={cities} onChange={onCityChange52} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity53} options={cities} onChange={onCityChange53} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity54} options={cities} onChange={onCityChange54} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Maladie: <Dropdown value={selectedCity55} options={cities} onChange={onCityChange55} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity56} options={cities} onChange={onCityChange56} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity57} options={cities} onChange={onCityChange57} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Handicap : <Dropdown value={selectedCity58} options={cities} onChange={onCityChange58} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity59} options={cities} onChange={onCityChange59} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity60} options={cities} onChange={onCityChange60} optionLabel="name" placeholder="Score" /></p> ,
     </CCol>

  <CCol md={6}>
<p> Occupations : <Dropdown value={selectedCity61} options={cities} onChange={onCityChange61} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity62} options={cities} onChange={onCityChange62} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity63} options={cities} onChange={onCityChange63} optionLabel="name" placeholder="Score" /></p> ,
    </CCol>

</CRow>
                    

        </TabPanel>

        <TabPanel header="Commodité">


    <CRow>

<CCol md={6}>
<p>
  Eclairage :  <Dropdown value={selectedCity64} options={cities} onChange={onCityChange64} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity65} options={cities} onChange={onCityChange65} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity66} options={cities} onChange={onCityChange66} optionLabel="name" placeholder="Score" />
</p> 
</CCol>

<CCol md={6}>
<p> Cuisson : <Dropdown value={selectedCity67} options={cities} onChange={onCityChange67} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity68} options={cities} onChange={onCityChange68} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity69} options={cities} onChange={onCityChange69} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p>   Aeaux : <Dropdown value={selectedCity70} options={cities} onChange={onCityChange70} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity71} options={cities} onChange={onCityChange71} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity72} options={cities} onChange={onCityChange72} optionLabel="name" placeholder="Score" /></p> ,

  </CCol>

  <CCol md={6}>
<p> Ordure : <Dropdown value={selectedCity73} options={cities} onChange={onCityChange73} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity74} options={cities} onChange={onCityChange74} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity75} options={cities} onChange={onCityChange75} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Nombrep: <Dropdown value={selectedCity76} options={cities} onChange={onCityChange76} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity77} options={cities} onChange={onCityChange77} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity78} options={cities} onChange={onCityChange78} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p> Aisance : <Dropdown value={selectedCity79} options={cities} onChange={onCityChange79} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity80} options={cities} onChange={onCityChange80} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity81} options={cities} onChange={onCityChange81} optionLabel="name" placeholder="Score" /></p> ,
     </CCol>

  <CCol md={6}>
<p> Loyer : <Dropdown value={selectedCity82} options={cities} onChange={onCityChange82} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity83} options={cities} onChange={onCityChange83} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity84} options={cities} onChange={onCityChange84} optionLabel="name" placeholder="Score" /></p> ,
    </CCol>
    <CCol md={6}>
<p> Type Logement : <Dropdown value={selectedCity85} options={cities} onChange={onCityChange85} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity86} options={cities} onChange={onCityChange86} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity87} options={cities} onChange={onCityChange87} optionLabel="name" placeholder="Score" /></p> ,
    </CCol>

</CRow>

                    

        </TabPanel>

    <TabPanel header="Equipement">

    <CRow>

<CCol md={6}>
<p>
  Moyend :  <Dropdown value={selectedCity88} options={cities} onChange={onCityChange88} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity89} options={cities} onChange={onCityChange89} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity90} options={cities} onChange={onCityChange90} optionLabel="name" placeholder="Score" />
</p> 
</CCol>

<CCol md={6}>
<p> Equipee : <Dropdown value={selectedCity91} options={cities} onChange={onCityChange91} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity92} options={cities} onChange={onCityChange92} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity93} options={cities} onChange={onCityChange93} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p>   Equipepo : <Dropdown value={selectedCity94} options={cities} onChange={onCityChange94} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity95} options={cities} onChange={onCityChange95} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity96} options={cities} onChange={onCityChange96} optionLabel="name" placeholder="Score" /></p> ,

  </CCol>

</CRow>
                

    </TabPanel>

    <TabPanel header="Vulnérabilité">


    <CRow>

<CCol md={6}>
<p>
  Cond-vie :  <Dropdown value={selectedCity97} options={cities} onChange={onCityChange97} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity98} options={cities} onChange={onCityChange98} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity99} options={cities} onChange={onCityChange99} optionLabel="name" placeholder="Score" />
</p> 
</CCol>

<CCol md={6}>
<p> Cond-phy : <Dropdown value={selectedCity100} options={cities} onChange={onCityChange100} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity101} options={cities} onChange={onCityChange101} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity102} options={cities} onChange={onCityChange102} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p>   Occup : <Dropdown value={selectedCity103} options={cities} onChange={onCityChange103} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity104} options={cities} onChange={onCityChange104} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity105} options={cities} onChange={onCityChange105} optionLabel="name" placeholder="Score" /></p> ,

  </CCol>

  <CCol md={6}>
<p> Etude : <Dropdown value={selectedCity106} options={cities} onChange={onCityChange106} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity107} options={cities} onChange={onCityChange107} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity108} options={cities} onChange={onCityChange108} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>


</CRow>
                

    </TabPanel>

    <TabPanel header="Ménage">
  
    <CRow>

<CCol md={6}>
<p>
  Moyenne age :  <Dropdown value={selectedCity109} options={cities} onChange={onCityChange109} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity110} options={cities} onChange={onCityChange110} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity111} options={cities} onChange={onCityChange111} optionLabel="name" placeholder="Score" />
</p> 
</CCol>

<CCol md={6}>
<p> Niveau etude M : <Dropdown value={selectedCity112} options={cities} onChange={onCityChange112} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity113} options={cities} onChange={onCityChange113} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity114} options={cities} onChange={onCityChange114} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

  <CCol md={6}>
<p>   Type ménage : <Dropdown value={selectedCity115} options={cities} onChange={onCityChange115} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity116} options={cities} onChange={onCityChange116} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity117} options={cities} onChange={onCityChange117} optionLabel="name" placeholder="Score" /></p> ,

  </CCol>

  <CCol md={6}>
<p> Occupations : <Dropdown value={selectedCity118} options={cities} onChange={onCityChange118} optionLabel="name" placeholder="Score" />
  <Dropdown className='m-2' value={selectedCity119} options={cities} onChange={onCityChange119} optionLabel="name" placeholder="Score" />
  <Dropdown   value={selectedCity120} options={cities} onChange={onCityChange120} optionLabel="name" placeholder="Score" /></p> ,
  </CCol>

</CRow>

                

    </TabPanel>
    <TabPanel header="Habitat">
  
    
<CRow>

        <CCol md={6}>

        <p> Ville :  <Dropdown value={selectedCity121} options={cities} onChange={onCityChange121} optionLabel="name" placeholder="Score" />
        <Dropdown className='m-2' value={selectedCity122} options={cities} onChange={onCityChange122} optionLabel="name" placeholder="Score" />
        <Dropdown   value={selectedCity123} options={cities} onChange={onCityChange123} optionLabel="name" placeholder="Score" />
        </p> 
        </CCol>

        <CCol md={6}>
            
        <p> Quartier : <Dropdown value={selectedCity124} options={cities} onChange={onCityChange124} optionLabel="name" placeholder="Score" />
        <Dropdown className='m-2' value={selectedCity125} options={cities} onChange={onCityChange125} optionLabel="name" placeholder="Score" />
        <Dropdown   value={selectedCity126} options={cities} onChange={onCityChange126} optionLabel="name" placeholder="Score" /></p> ,
        </CCol>
        

</CRow>
                

    </TabPanel>
  
    </TabView>
</div>
</CContainer>
)

}

export default Objets
