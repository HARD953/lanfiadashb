

import React, { useState,useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axiosIntance from '../../../api/axiosInstance'

const DoughnutChart = (props) => {
   
 
  
       

    const [chartData,setChartData] = useState({
        datasets: [
            {
                data: [props.data.individuel.physique, props.data.individuel.condition , props.data.individuel.occupation,props.data.individuel.etude],
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
        axiosIntance.get('staticirclei/')
        .then((res)=>{
    
    
          const data=[res.data.individu.physique,res.data.individu.condition,res.data.individu.occupation,res.data.individu.etude]
    
         
          setChartData({
            datasets: [
                {
                    data: data,
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
                 

export default DoughnutChart