
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const LineChart= () => {
    const [basicData] = useState({
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Decembre'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40, 10, 35, 55, 80,21],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            }
         
        ]
    });

  
    
    return (
        <div>
            <div className="flex justify-content-center" style={{height:'10%'}}>
                <Chart height={60} type="line" data={basicData}  style={{position:"relative" , height:'10%'}} />
            </div>

        </div>
    )
}

export default LineChart