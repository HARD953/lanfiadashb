
import React, { useState,useEffect } from 'react';
import axiosIntance from '../../../api/axiosInstance'
import { Chart } from 'primereact/chart';


const DoughnutChartM = (props) => {


    const [chartData,setChartData] = useState({
        datasets: [
            {
                data: [props.data.menage.physique>0 ?props.data.menage.physique : 0 , props.data.menage.condition >0 ?props.data.menage.condition : 0, props.data.menage.occupation>0 ?props.data.menage.occupation : 0,props.data.menage.etude>0 ?props.data.menage.etude : 0],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FFCE99",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FFCE99",
                ]
            }]
    });

    
  useEffect(()=>{
    axiosIntance.get('staticirclem/')
    .then((res)=>{


      const data=[res.data.menage.physique,res.data.menage.condition,res.data.menage.occupation,res.data.menage.etude]

    
      setChartData({
        datasets: [
            {
                data: data,
                backgroundColor: [
                    "#FF6384",
                    "#36A2AC",
                    "#FFCE56",
                    "#FFCE99",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2AC",
                    "#FFCE56",
                    "#FFCE99",
                ]
            }]
    })



      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

 




   
    return (
        <div className="flex justify-content-center">
            <Chart type="doughnut" data={chartData}  style={{ position: 'relative', width: '70%',margin:"auto" }} />
        </div>
    )
    
   
}
                 

export default DoughnutChartM