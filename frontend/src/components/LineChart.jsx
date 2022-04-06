import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  const len = coinHistory?.data?.history?.length;
  const yLen = coinHistory?.data?.history?.length;
  for (let i = len-1; i > 0; i--) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }
  for (let i = yLen-1; i > 0; i--) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString("en-US"));
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD $',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="w-11/12 ">
                <div className="flex flex-col justify-between h-full">
                  <div>
                       <div className="lg:flex w-full justify-between">
                          <h3 className=" leading-5 text-base md:text-xl font-bold">{coinName} Price Chart</h3>
                          <div className="price-container flex justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                                    <Typography.Title className="price-change">Change: {coinHistory?.data?.change < 0 ? 
                                      <h1 className='red'>{Number(coinHistory?.data?.change).toFixed(2)}%</h1>
                                       : 
                                      <h1 className='green'>{Number(coinHistory?.data?.change).toFixed(2)}%</h1>
                                    }</Typography.Title>
                                    <Typography.Title className="current-price">
                                        Current {coinName} Price: $ {currentPrice}
                                    </Typography.Title>
                          </div>
                       </div>
                  </div>
                  <div className="w-full">
                      <div className="mt-4 w-full rounded-lg bg-gray-300 shadow-lg">
                              <Line data={data} options={options} width={1025} height={400} />
                      </div>
                  </div>
                  
                </div>
      </div>
      
    </div>
    
  );
};

export default LineChart;