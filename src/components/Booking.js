import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Form, Button, Input, Select, Modal } from 'antd';
import Logo from '../assets/Logo.jpg';

const { Option } = Select;


const Booking = ({ history, match }) => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedSession, setSelectedSession] = useState(null);
    const [sessions, setSessions] = useState(null);
    const [date, setDate] = useState([]);
    const [seats, setSeats] = useState([]);
    const [children, setChildren] = useState(null)

    function info() {
        Modal.info({
          title: 'This is your code for ticket',
          content: (
            <div>
              <p>Please remember or take a note</p>
              <p>code</p>
            </div>
          ),         
          onOk() {},
        //    onOk: () => {
        //       history.push('/films')
        //   },        
        });       
    }
    const filmId = match.params.id;
    
    useEffect(() => {
        axios.get('http://localhost:3030/sessions-date', {})
        .then((res) => {
            setDate(res.data);
        })
    }, [])

    const onFinish = ( value ) => {    
        axios.post('http://localhost:3030/book-ticket', {
            ...value,
            id: filmId,
            seats: seats,
            date: selectedDate,
            session: selectedSession,
        })
        .then(() => {
            info();
        })
    }

    const onSelectSession = (value) => {
        setSelectedSession(value)
        axios.get('http://localhost:3030/seats', {})
        .then((res) => {
            setChildren(res.data);
        })
    }

    const onSelectDate = (value) => {
        axios.get('http://localhost:3030/sessions', {
            params: {
                id: filmId,
                date: value,
              }
        })
        .then((res) => {
            setSessions(res.data);
        })
        setSelectedDate(value)
    }

    const onSelectSeat = (value) => {
        setSeats(value)
    }
    
    return<div style={{ minHeight: 'calc(100vh - 113px)'}}>
        <Row style={{ padding: '15px 0'}}>
            <Col span={20} offset={2}>
                <span style={{fontWeight: 'bold', fontSize: '22px' }}>
                    Booking
                </span>
            </Col>        
        </Row>
        <Row type='flex'>
            <Col offset={2} span={2} style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', paddingLeft: '7px' }}>
                <span>
                    Select Date
                </span>
            </Col>
            <Col offset={4} span={4}>
                <Select placeholder='Select Date' onChange={onSelectDate} style={{ width: '100%' }}>
                    {date?.map((date, index) => <Option key={index} value={Object.values(date)}>
                        {Object.values(date)}
                    </Option>)}
                </Select>
            </Col>
        </Row>
        {(sessions && sessions.length && <Row type='flex' style={{ marginTop: '20px' }}>
                <Col offset={2} span={2} style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', paddingLeft: '7px' }}>
                    <span>
                        Select Session
                    </span>
                </Col>
                <Col offset={4} span={4}>
                    <Select placeholder='Select session' onChange={onSelectSession} style={{ width: '100%' }}>
                        {sessions?.map((session, index) => <Option key={index} value={session.Session_time}>
                            {session.Session_time}
                        </Option>)}
                    </Select>
                </Col>
        </Row>)}
        {selectedSession && (<Row style={{ marginTop: '20px'}}>
                <Col offset={2} span={8}>
                    <Form name='complex-form' onFinish={onFinish} labelCol={{ span: 5 }}>
                        <Form.Item label='First Name'>
                            <Form.Item
                                name='firsNname'
                                rules={[{ required: true, message: 'First Name is required' }]}
                                validateTrigger='onSubmit'
                            >
                                <Input placeholder='First Name' />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label='Last Name'>
                            <Form.Item
                                name='lastName'
                                rules={[{ required: true, message: 'Last Name is required' }]}
                                validateTrigger='onSubmit'
                            >
                                <Input placeholder='Last Name' />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label='Phone'>
                            <Form.Item
                                name='phone'
                                rules={[{ required: true, message: 'Phone is required' }]}
                                validateTrigger='onSubmit'
                            >
                                <Input placeholder='Phone' />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label='Seat'>
                            <Form.Item
                                name='seat'
                                rules={[{ required: true, message: 'Please select a seat'}]}
                                validateTrigger='onSubmit'
                            >
                                <Select 
                                    placeholder='Select seat' 
                                    onChange={onSelectSeat}
                                    mode='multiple'
                                >
                                    {children?.map((value, index) => {
                                        return <Option key={index} value={{
                                            key: `R-${value.Row}, S-${value.Seat}`,
                                            id: value.Seat_ID,
                                        }}>Row-{value.Row}, Seat-{value.Seat}</Option>
                                })}
                                </Select>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label='' colon={false}>
                            <Button type='primary' htmlType='submit'>
                                Book
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12} offset={2}>
                    {seats.map((seat, index) => {
                        return<Row key={index} style={{ paddingBottom: '20px'}}>
                            <Col span={20} style={{ height: '170px', backgroundColor: '#A7CDC2' }}>
                                <Row type='flex'>
                                    <Col offset={1} style={{ height: '110px' }} span={4}>
                                        <img 
                                            src={Logo} 
                                            style={{ 
                                                width: '80px', 
                                                height: '60px', 
                                                margin: '20px 0 0 0' 
                                            }} 
                                            alt='logo' 
                                        />    
                                    </Col>
                                    <Col offset={1} style={{ paddingTop: '20px' }} span={18}>
                                        <Row type='flex' style={{ justifyContent: 'center'}}>
                                            <Col>
                                                <span style={{ fontWeight: 600, fontSize: '20px' }}>
                                                    Film Title
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row type='flex' style={{ justifyContent: 'center'}}>
                                            <Col>
                                                <span style={{ fontWeight: 600, fontSize: '20px' }}>
                                                    18:00
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col offset={1} span={4}>
                                        <span style={{ fontWeight: 600, fontSize: '18px' }}>
                                            Hall
                                        </span>
                                    </Col>
                                    <Col span={7}>
                                        <span style={{ fontWeight: 600, fontSize: '18px' }}>
                                            Seat
                                        </span>
                                    </Col>
                                    <Col span={7}>
                                        <span style={{ fontWeight: 600, fontSize: '18px' }}>
                                            Date
                                        </span>
                                    </Col>
                                    <Col span={4} align='center'>
                                        <span style={{ fontWeight: 600, fontSize: '18px' }}>
                                            Price
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col offset={1} span={4}>
                                        Green
                                    </Col>
                                    <Col span={7}>
                                        {seat.key}
                                    </Col>
                                    <Col span={7}>
                                         {selectedDate}
                                    </Col>
                                    <Col span={4} align='center'>
                                        20$ 
                                    </Col>
                                </Row>
                            </Col>    
                        </Row> 
                    })}                    
                </Col>
            </Row>)
        }
    </div>
}

export default withRouter(Booking);