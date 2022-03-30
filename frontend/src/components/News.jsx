import React, { useState } from 'react';
import {Select, Typography, Row, Col, Avatar, Card } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
import moment from 'moment';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title}  = Typography;
const { Option } = Select;

const News = ({ simplified}) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });  

    if (!cryptoNews?.value) return 'Loading...'
 
    return (
    //     <Row gutter={[24, 24]}>
    //         {!simplified && (
    //             <Col span={24} className="text-white">
    //                 <Select
    //                 showSearch
    //                 className="select-news"
    //                 placeholder="Select a Crypto"
    //                 optionFilterProp="children"
    //                 onChange={(value) => setNewsCategory(value)}
    //                 filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    //                 >
    //                 <Option value="Cryptocurency">Cryptocurrency</Option>
    //                 {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
    //                 </Select>
    //             </Col>
    //             )}
    //             {cryptoNews.value.map((news, i) => (
    //             <Col xs={24} sm={12} lg={8} key={i}>
    //                 <Card hoverable className="news-card text-white">
    //                 <a href={news.url} target="_blank" rel="noreferrer" >
    //                     <div className="news-image-container">
    //                     <Title className="news-title" level={4}>{news.name}</Title>
    //                     <img style={{ maxWidth: '200px', macHeight: '80px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
    //                     </div>
    //                     <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
    //                     <div className="provider-container">
    //                     <div>
    //                         <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
    //                         <Text className="provider-name">{news.provider[0]?.name}</Text>
    //                     </div>
    //                     <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
    //                     </div>
    //                 </a>
    //                 </Card>
    //             </Col>
    //         ))}
    //   </Row>

        <Row  className="grid grid-cols-3 gap-6 pt-6 px-8">
            {!simplified && (
                    <Col className="col-span-3 flex justify-center mb-10" >
                        <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {data?.data?.coins?.map((currency) => <Option value={currency.name} key={currency.uuid}>{currency.name}</Option>)}
                        </Select>
                    </Col>
                    )}

            {cryptoNews.value.map((news, i) => (
                <Col  className="gap-x-14 " xs={24} sm={12} lg={8} key={i}> 
                    <Card hoverable className="news-card mt-6 border-2 border-gray-300 rounded-xl">
                        <a href={news.url} target="_blank" rel="noreferrer" >
                            <div className="news-image-container mx-4 my-5">
                                <Title className="news-title text-lg font-medium">{news.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '200px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                            </div>
                            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                            <div className="provider-container text-xs">
                                <div>
                                    <Avatar size={{
                                                    xs: 24,
                                                    sm: 32,
                                                    md: 32,
                                                    lg: 32,
                                                    xl: 32,
                                                    xxl: 32,
                                                    }} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text className='text-black'>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}

        </Row>


    )
}

export default News;
