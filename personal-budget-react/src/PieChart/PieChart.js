import React from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { getDefaultNormalizer } from '@testing-library/react';

function PieChart() {
  
    const myBudget = {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#a05d56',
                    '#d0743c',
                    '#ff8c00'
                ],
            }
        ],
        labels: []
    };
    
    const getData = () => {
        axios.get('http://localhost:5000/budget').then((res) => {
            for(var i = 0; i < res.data.myBudget.length; i++) {
                myBudget.datasets[0].data[i] = res.data.myBudget[i].budget;
                myBudget.labels[i] = res.data.myBudget[i].title;
            }
        });
    }

    getData();
    
    return (
        <Pie data={myBudget}/>
    );
}

export default PieChart;