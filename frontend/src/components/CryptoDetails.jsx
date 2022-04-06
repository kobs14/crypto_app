import React, { useState, Fragment } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import millify from 'millify';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import Loader from './Loader';
import LineChart from './LineChart';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    const cryptoDetails = data?.data?.coin;
  
    if (isFetching) return <Loader />;
  
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  
    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];
  
    return (
      <Col className="coin-detail-container text-white">
        <Col className="coin-heading-container">
          <Title className="coin-name text-2xl">
            {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
          </Title>
          <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
        </Col>
         <div className="w-15 text-left mt-4">
            <Menu as="div" className="relative inline-block text-center">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm text-white bg-blue-700 hover:bg-blue-800 font-small rounded-md hover:bg-opacity-50 focus:outline-none focus:ring-blue-300 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-opacity-75">
                {timeperiod}
                <ChevronDownIcon
                  className="w-3 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                  />
              </Menu.Button>
              <Menu.Items className="block absolute w-full py-2 px-4 text-sm origin-top-right text-white bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                {time.map((data) => 
                  <Menu.Item key={data}>
                  {({ active }) => (
                    <button
                       className={`${
                       active ? 'bg-blue-800 text-white' : 'text-white'
                    } group flex rounded-md items-center w-full px-1 py-1 text-sm`}
                    onClick={() => {
                      setTimeperiod(data)
                      }}
                  >
                    {data}
                  </button>
                  )}
                </Menu.Item>
                )}
               </Menu.Items>
            </Menu>
         </div>
      
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">{cryptoDetails.name} Value Statistics</Title>
              <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">Other Stats Info</Title>
              <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
            {HTMLReactParser(cryptoDetails.description)}
          </Row>
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
            {cryptoDetails.links?.map((link) => (
              <Row className="coin-link" key={link.name}>
                <Title level={5} className="link-name">{link.type}</Title>
                <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    );
  };

export default CryptoDetails;