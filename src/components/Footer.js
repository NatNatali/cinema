import React from 'react';
import { Row, Col } from 'antd';
import {
    CopyrightOutlined,
    InstagramOutlined,
    FacebookOutlined,
    TwitterOutlined
} from '@ant-design/icons';

const Footer = () => {
    return<Row type='flex' style={{ backgroundColor: '#A09A97', padding: ' 15px 0' }}>
        <Col offset={2} span={10}>
            <Row>
                <Col>
                    <CopyrightOutlined style={{ fontSize: '12px' }} />
                </Col>
                <Col>
                    &nbsp;Cinema 2020, All rights reserved.
                </Col>
            </Row>
        </Col>
        <Col span={10} align='right'>
            <Row type='flex' justify='end'>
                <Col span={2}>
                    <InstagramOutlined style={{ fontSize: '20px' }} />
                </Col>
                <Col span={2}>
                    <FacebookOutlined style={{ fontSize: '20px' }} />
                </Col>
                <Col span={2}>
                    <TwitterOutlined style={{ fontSize: '20px' }} />
                </Col>
            </Row>
        </Col>
    </Row>
}

export default Footer;