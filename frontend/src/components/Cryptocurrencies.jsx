import React, { useState, useEffect } from 'react'
import  { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import millify from 'millify';
import Loader from './Loader';
import Coin from './Coin';


import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
    
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setCryptos(filterData);

    },[cryptosList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
               <div className='flex justify-center mb-6'>
               <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
             </div> 
             )}
             {cryptos?.map(coin => {
                return (

                <Link to={`/crypto/${coin.uuid}`} key={coin.uuid}>
                    <Coin
                        // onClick={() => handleClick(linkToPage("Login"))}
                        key={coin.uuid}
                        name={coin.name}
                        price={coin.price}
                        symbol={coin.symbol}
                        marketcap={coin.marketCap}
                        volume={coin["24hVolume"]}
                        image={coin.iconUrl}
                        priceChange={coin.change}
                    />
                </Link>
                );
            })}
             {/* <Row 
                gutter={[32, 32]} 
                className="crypto-card-container">
                    {cryptos?.map((currency) => (

                        
                        
                        <Col
                            xs={24}
                            sm={12}
                            lg={6}
                            className="crypto-card"
                            key={currency.uuid}
                        >
                                <Link to={`/crypto/${currency.uuid}`}>
                                    <Card
                                        title={`${currency.rank}. ${currency.name}`}
                                        extra={<img className="crypto-image" src={currency.iconUrl} />}
                                        hoverable
                                    >
                                            <p>Price: {millify(currency.price)}</p>
                                            <p>Market Cap: {millify(currency.marketCap)}</p>
                                            <p>Daily Change: {currency.change}%</p>
                                    </Card>
                                </Link>
                        </Col>
                ))}
        </Row> */}

        </>
    )
}

export default Cryptocurrencies;
