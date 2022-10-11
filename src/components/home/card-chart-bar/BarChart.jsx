
import React, { useState,useEffect } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = (props) => {

    let allVille =[]
    let allNombre = []

   
    const [basicData,setBasicData] = useState({
        labels: props.label,
        datasets: [
            {
                label: 'Villes avec nombre de personnes vulnerables élevés',
                backgroundColor: '#42A5F5',
                data: props.valeur
            },
           
        ]
    });

    var i =0

    useEffect(()=>{
        

          setBasicData({
            labels: props.label,
            datasets: [
                {
                    label: 'Villes avec nombre de personnes vulnerables élevés',
                    backgroundColor: '#42A5F5',
                    data: props.valeur
                },
               
            ]
      
        })
    
      },[props.label,props.valeur])


        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


   

    return (
        <div>
            <div className="">
                <Chart type="bar" height={250} data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChart
                 