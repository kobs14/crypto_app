import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col,  Statistic } from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching} = useGetCryptosQuery(10);
    console.log(data);

    const globalStats = data?.data?.stats;

    console.log(globalStats);

    if (isFetching) return <Loader />;

    return (
     <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 flex-col mf:mr-10">
                    <h1 className="text-center sm:text-5xl text-white text-gradient py-1">
                         Global Crypto State
                    </h1>
                    <p className="text-center mt-5 text-white font-light md:w-9/12 w-11/12">
                         Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    <div className="text-center mt-5 text-white font-light md:w-9/12 w-11/12 text-base grid grid-cols-2 gap-4">
                         <div><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></div>
                         <div><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></div>
                         <div><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></div>
                         <div><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></div>
                         <div><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></div>
                    </div>
                    <div className='mt-20 items-center justify-between text-white font-light md:w-9/12 w-11/12 text-base grid grid-cols-3'>
                         <Title className="col-span-2 text-xl">Top 10 Cryptocurrencies</Title>
                         <Title className="text-sm"><Link to='/cryptocurrencies'>Show More</Link></Title>
                    </div>
                    <Cryptocurrencies simplified/>
                    <div className='mt-20 items-center justify-between text-white font-light md:w-9/12 w-11/12 text-base grid grid-cols-3 gap-4'>
                         <Title className="col-span-2 text-xl">Latest Crypto News</Title>
                         <Title className="text-sm">Show More</Title>
                    </div>
                    <News simplified/>
            </div>
        </div>
     </div>
    );
}

export default Homepage;