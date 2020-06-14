import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Logo from '../assets/Logo.jpg'; 

const Header = () => {
    return<Row
      type='flex'
      align='middle'
      style={{ height: '60px', backgroundColor: '#A7CDC2' }}
    >
        <Col
            offset={1}
            span={11}
        >
            <Link to='/'>
                <img src={Logo} style={{ width: '70px', height: '50px' }} alt='logo' />
            </Link>

        </Col>
        <Col offset={7} span={2}>
            <Link to={'/films'}>
                Films
            </Link>    
        </Col>
        <Col span={2}>
            <Link to={'/contacts'}>
            Contacts
            </Link>
        </Col>
    </Row>
}

export default Header;