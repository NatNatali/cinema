import React from 'react';
import { Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';
import {
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined,
    ClockCircleOutlined,   
} from '@ant-design/icons';

const contacts = [{
    name: 'Address:',
    type: 'Abovyan 1',
    icon: <EnvironmentOutlined style={{marginRight:'10px'}} />,
},{
    name: 'Email:',
    type: 'cinema@cinema.com',
    icon: <MailOutlined style={{marginRight:'10px'}} />,
},{
    name: 'Phone:',
    type: '+37477662266',
    icon: <PhoneOutlined style={{marginRight:'10px'}} />,
},{
    name: 'Working hours:',
    type: '10:00-23:00',
    icon: <ClockCircleOutlined style={{marginRight:'10px'}} />
}]

const Contacts = () => {

    return <div style={{ minHeight: 'calc(100vh - 113px)'}}>
        <Row style={{ padding: '15px 0'}}>
            <Col span={20} offset={2}>
                <span style={{fontWeight: 'bold', fontSize: '22px' }}>
                    Contacts
                </span>
            </Col>        
        </Row> 
        <Row>
            <Col span={10} offset={2}>
                {contacts.map((contact, index) => {
                    return<Row key={index}>
                        <Col span={6} >
                            {contact.icon}
                            {contact.name}
                        </Col>
                        <Col span={10} offset={2}>
                            {contact.type}
                        </Col>
                    </Row>
                })}    
            </Col>
            <Col span={10} style={{ height: '350px' }}>
                <GoogleMapReact
                    defaultCenter={{ 
                        lat: 40.1776986,
                        lng: 44.5104624
                    }}
                    defaultZoom={14}
                >
                </GoogleMapReact>
            </Col>
        </Row>
    </div>
};

export default Contacts;