
import { Row } from 'antd';
import React, { useState } from 'react';

import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterComponent = () => {

    return (
        <Row className="flex justify-center pt-10 px-4 ">
            <TwitterTimelineEmbed 
                sourceType="profile" 
                screenName="crypto"
                options={{
                    tweetLimit: "10",
                    height: "750",
                    width:"700px"
                }}
                theme="dark"
            />
         </Row>
    )

};


export default TwitterComponent;