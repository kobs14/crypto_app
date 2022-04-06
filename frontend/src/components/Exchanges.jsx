import React, { useState } from 'react';

import { Col, Row, Typography, Select } from 'antd';

const { Option } = Select;

const Exchanges = () => {

    return (
        <div className="container mx-auto px-4 h-full">
             <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-gray-600 text-sm font-bold">
                                  This page is available only for Premium users. Please contact us for further information.
                                </h6>
                            </div>
                             <hr className="mt-6 border-b-1 border-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};


export default Exchanges;