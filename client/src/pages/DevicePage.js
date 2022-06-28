import React, {useContext, useEffect, useState} from 'react';
import {Container, Card, Col, Row, Image, Button} from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import {useNavigate, useParams} from "react-router-dom";
import {addToBasket, fetchOneDevice} from "../http/deviceAPI";
import {BASKET_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DevicePage = () => {
    const {user} = useContext(Context)
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // функция для записи в корзину
    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        formData.append('name', device.name)
        addToBasket(formData).then(response =>
            alert(`Товар ` + device.name + ` был добавлен в корзину!`)
        )
    }

    return (
        <Container className="mt-3">
            <Row className="m-3 device-page-row">
                <Col md={4} className="name-device-block">
                    <Card
                        className="d-flex h-100 flex-column align-items-center justify-content-around"
                        style={{ border: 'white'}}
                    >
                        <h1 className="name-device-page" style={{fontSize: 32}}>{device.name}</h1>

                    </Card>
                </Col>
                <Col md={4} className="position-relative img-block">
                    <Image className="img-device-page position-absolute top-50 start-50 translate-middle" src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex h-100 flex-column align-items-end justify-content-around device-page-btns"
                        style={{ fontSize: 32, border: "none"}}
                    >
                        <h3 className="device-page-price">От: {device.price} BYN</h3>

                        {/* Запускаем функцию */}
                        {user.isAuth ?
                            <Button className="btns" variant={"outline-dark"} onClick={add}>Добавить в корзину</Button>
                            :
                            <Button className="btns hide" variant={"outline-dark"}>Добавить в корзину</Button>
                        }
                        <Button className="btns" onClick={() => navigate(SHOP_ROUTE)} variant={"outline-primary"}>Назад</Button>
                    </Card>
                </Col>
            </Row><br/>
            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {device.info.map((info, index) =>
                    <Row className="characteristics" key={info.id} style={{border: '2px solid lightgray', background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};
export default DevicePage;