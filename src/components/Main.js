import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel , Tabs, Divider } from 'antd';
import axios from 'axios';
import './index.css';

const week = [{
  day: 'monday', 
},{
    day: 'tuesday',
},{
    day: 'wendnesday',
},{
    day: 'thursday',
},{
    day: 'friday',
}]

const contents = [[{
    time: '10:00',
    title: 'Malefisent',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '12:30',
    title: 'Malefisent',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '14:00',
    title: 'Malefisent',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '17:00',
    title: 'Malefisent',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '21:00',
    title: 'Malefisent',
    genre: 'fantasy',
    director: 'Luk Beson',
},
],[
{
    time: '10:00',
    title: 'Furious',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '12:30',
    title: 'Furious',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '14:00',
    title: 'Furious',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '17:00',
    title: 'Furious',
    genre: 'fantasy',
    director: 'Luk Beson',
},{
    time: '21:00',
    title: 'Furious',
    genre: 'fantasy',
    director: 'Luk Beson',
},
],]

const { TabPane } = Tabs;

const Main = () => {

const [images, setImages] = useState([]);

const [tab, setTab] = useState(0);
const [day, setDay] = useState('monday')

useEffect(() => {
    axios.get('http://localhost:3030/carusel-images', {})
    .then((res) => {
        setImages(res.data);
    })
},[])

// useEffect(() => {
//     axios.get('http://localhost:3030/week-films', {})
//     .then((res) => {
//         console.log('res', res.data)
//     })
// }, [])

    return<>
        <Row>
            <Col span={24}>
                <Carousel
                    autoplay
                    autoplaySpeed={3000}
                    infinite
                    slidesPerRow={3}
                >
                    {images?.map((item, index)=> <div key={index}>
                            <div 
                                style={{ 
                                    width: '100%', 
                                    height: '500px', 
                                    backgroundImage:`url(${item.Image})`, 
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '0 15px',
                                }} 
                                />
                        </div>
                    )}
                </Carousel>
            </Col>
        </Row>
        <Row type='flex' justify='center' style={{ paddingTop: '20px' }}>
            <Col>
                <Tabs 
                    defaultActiveKey={tab}
                    onTabClick={(key) => setTab(key)}
                >
                    {week.map((week, index) => {
                        return<TabPane tab={week.day} key={index}>
                        {week.content}
                    </TabPane>
                    })}
                </Tabs>
            </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
            <Col span={24}>
                    <Row>
                        <Col offset={2} span={5}>
                            <span style={{ fontWeight: 'bold' }}>
                                Time
                            </span>
                        </Col>
                        <Col span={5}>
                            <span style={{ fontWeight: 'bold' }}>
                                Title
                            </span>
                        </Col>
                        <Col span={5}>
                            <span style={{ fontWeight: 'bold' }}>
                                Genre
                            </span>
                        </Col>
                        <Col span={5}>
                            <span style={{ fontWeight: 'bold' }}>
                                Directed by
                            </span>
                        </Col>
                    </Row>
                    <Divider style={{ borderTop: '1px solid #A7CDC2' }} />
                    {contents[tab]?.map((content, index)=> {
                        return<Row key={index}>
                        <Col offset={2} span={5}>
                            {content.time}
                        </Col>
                        <Col span={5}>
                            {content.title}
                        </Col>
                        <Col span={5}>
                            {content.genre}
                        </Col>
                        <Col span={5}>
                            {content.director}
                        </Col>
                    </Row>
                })}
            </Col>
        </Row>
    </>
}

export default Main;