import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Input } from 'antd';
import img4 from '../assets/img4.jpg';


const { Search } = Input;

const Films = ({ history }) =>{

    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/films', {})
        .then((res) => {
            setFilms(res.data);
        })
    }, [])

    const handleSearchFilms = (value) => {
        axios.get('http://localhost:3030/films', {
            params: {
                search: value,
            }
        })
        .then((res) => {
            setFilms(res.data);
        })
    }

    return <div style={{ minHeight: 'calc(100vh - 113px)'}}>
        <Row style={{ padding: '15px 0'}}>
            <Col offset={2} span={10}>
                <span style={{fontWeight: 'bold', fontSize: '22px' }}>
                    Films
                </span>
            </Col>
            <Col span={10} align='end'>
                <Search
                    placeholder='search film'
                    onSearch={value => handleSearchFilms(value)}
                    style={{ width: 200 }}
                />
            </Col>
        </Row>
        <Row>
            <Col offset={2} span={20}>
                <Row gutter={32}>
                    {(films && films.length) ? films.map((film, index) => {
                        return<Col 
                            xs={12} md={8} xl={6}
                                onClick={() => history.push(`./films/${film.Film_ID}`)}
                        >
                        <div 
                            style={{ 
                                width: '100%', 
                                height: '250px',
                                backgroundImage: `url(${film.Image})` || img4,
                                backgroundSize:'cover' 
                            }}
                        />
                        <div style={{ float: 'right' }}>
                            {film.Film_title}
                        </div>
                    </Col>
                    }) : (<Col align='center' span={24}>
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                No Films Found
                            </span>
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
    </div>;    
}

export default withRouter(Films);
