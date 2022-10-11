import React,{useState} from "react";
import { Chart } from 'primereact/chart';
import './CarteLeft.css';


const DoughnutChart = () => {
    const [chartData] = useState({
        labels: ['Individuels', 'Menages'],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
       
    )
}
                 



const CarteLeft= ()=>{

    return (
        <div className="carteLeft p-2">
            <h4 className="text-center" >Detail global </h4>

            <div >
                <DoughnutChart/>
            </div>
        </div>
    )
}

export default CarteLeft;