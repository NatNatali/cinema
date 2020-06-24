import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';

const SingleFilm = ({ history, match }) => {

    const [singleFilm, setSingleFilm] = useState(null)
    const [singleFilmActor, setSingleFilmActor] = useState(null)
    const [singleFilmGenre, setSingleFilmGenre] = useState(null)
    const filmId = match.params.id;
    useEffect(() => {
        axios.get('http://localhost:3030/single-film', {
            params: {
                id: filmId
              }
        })
        .then((res) => {
            setSingleFilm(res.data);
        })
    }, [filmId]);

    useEffect(() => {
        axios.get('http://localhost:3030/single-film-actors', {
            params: {
                id: filmId
              }
        })
        .then((res) => {
            setSingleFilmActor(res.data);
        })
    }, [filmId]);

    useEffect(() => {
        axios.get('http://localhost:3030/single-film-genre', {
            params: {
                id: filmId
              }
        })
        .then((res) => {
            setSingleFilmGenre(res.data);
        })
    }, [filmId]);

    return<div style={{ minHeight: 'calc(100vh - 113px)'}}>
        <Row style={{ padding: '15px 0'}}>
            <Col span={10} offset={2}>
                <span style={{fontWeight: 'bold', fontSize: '22px' }}>
                    {singleFilm?.Film_title}
                </span>
            </Col> 
            <Col align='right' span={10}>
                <Button onClick={()=> history.push(`/films/${filmId}/booking`)}>
                    Booking
                </Button>
            </Col>       
        </Row> 
        <Row>
            <Col offset={2} span={8}>
                <img src={singleFilm?.Image} style={{ height: '350px', width: '200px' }} alt='main'/>
            </Col>
            <Col span={12}>
                <Row>{singleFilm?.Description}</Row>
                <Row>
                    <Col span={4}>
                        Director:
                    </Col>
                    <Col span={16}>
                        {singleFilm?.Director}
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        Actors:
                    </Col>
                    <Col span={16}>
                        {singleFilmActor?.map((actor, index) => <span key={index}>
                            {actor.Actor_name}
                        </span>)}
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        Genre:
                    </Col>
                    <Col span={16}>
                    {singleFilmGenre?.map((genre, index) => <span key={index}>
                            {genre.Genre_name}
                        </span>)}
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        Premiere:
                    </Col>
                    <Col span={16}>
                        {singleFilm?.Premiere}
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        Country:
                    </Col>
                    <Col span={16}>
                        {singleFilm?.Country}
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        Duration:
                    </Col>
                    <Col span={16}>
                        {singleFilm?.Duration} min
                    </Col>
                </Row>
            </Col>
        </Row>;
    </div>
};

export default withRouter(SingleFilm);