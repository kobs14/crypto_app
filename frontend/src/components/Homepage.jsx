import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col,  Statistic } from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import Services from './Services';
import TwitterComponent from './TwitterComponent';

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching} = useGetCryptosQuery(10);
//     console.log(data);

    const globalStats = data?.data?.stats;

//     console.log(globalStats);

    if (isFetching) return <Loader />;

    return (
     <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 flex-col mf:mr-10">
                    <h1 className="text-center text-3xl sm:text-5xl text-white text-gradient py-1">
                         Global Crypto State
                    </h1>
                    <p className="text-center mt-5 text-white font-light">
                         Explore the crypto world. Buy and sell cryptocurrencies easily.
                    </p>
                    <div className="text-center mt-14 text-white font-light grid grid-cols-4 gap-4 gap-x-0.5">
                         <div className="col-start-2 col-end-3"><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></div>
                         <div className="col-start-3 col-span-1"><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></div>
                         <div className="col-start-2 col-end-3"><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></div>
                         <div className="col-start-3 col-span-1"><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}  prefix={"$"}/></div>
                         <div className="col-start-2 col-end-3"><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} prefix={"$"}/></div>
                    </div>
                    <div className='mt-20 mb-6 items-center justify-between text-white font-light text-center grid grid-cols-2'>
                         <Title className="text-xl">Top 10 Cryptocurrencies</Title>
                         <Title className=" text-sm"><Link to='/cryptocurrencies'>Show More</Link></Title>
                    </div>
                    <Cryptocurrencies simplified/>
                    <div className='mt-20 mb-6 items-center justify-between text-white font-light text-center grid grid-cols-2 gap-4'>
                         <Title className=" text-xl">Latest Crypto News</Title>
                         <Title className="text-sm"><Link to='/news'>Show More</Link></Title>
                    </div>
                    <News simplified/>
                    <TwitterComponent/>
            </div>
        </div>
     </div>
    );
}

export default Homepage;