import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import {delFromBasket, getBasket} from '../http/deviceAPI';
import {Button} from "react-bootstrap";
import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import {SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import close from '../assets/close.svg'

const Basket = observer(() => {
    const {device} = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [device.basket,])



    // ----- Считаем общую сумму, которую юзер набрал в корзину ------- //

    let prices = 0;
    {device.basket.map(price => {
            prices += Number(price.device.price)
        }
    )}
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>



            {/* ------- Считаем общую сумму ------- */}

            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2 border-0">
                <h1 className="pe-2 mb-0">Итого:</h1>
                <h3 className="ps-2 mt-2 mb-0">{prices}<span className="font-weight-light ps-2">BYN</span></h3>
            </Card>

            <Card className="d-flex w-100 flex-row pt-2 pb-2 justify-content-between align-items-center mb-2 border-0">
                <div className="basket-block d-flex flex-row">
                </div>
                <Button className="ms-5 basket-back-btn" onClick={() => navigate(SHOP_ROUTE)} variant={"outline-primary"}>Назад</Button>
            </Card>



            {device.basket.map(product =>
                    <Card className="d-flex w-100 pt-2 pb-2 justify-content-between mb-2 border-0" key={product.id}>
                        <Row className="d-flex w-100 justify-content-between align-items-center ms-0 me-0">
                            <div className="d-flex w-75 basket-device-name ps-0">
                                <div className="d-flex flex-row align-items-center">
                                    <img className="basket-device-img" src={process.env.REACT_APP_API_URL + product.device.img} width={50} />
                                    <h1 className="ps-3 basket-name mb-0">{product.device.name}</h1>
                                </div>
                            </div>
                            <div className="d-flex basket-device-price h-100 align-items-center justify-content-end pe-0">
                                    <h2 className="font-weight-light mb-0 basket-price me-2">{product.device.price} BYN</h2>
                                    <img onClick={e =>
                                            {
                                                delFromBasket(product.device.name)
                                            }
                                         }
                                         className="del-basket-img"
                                         width={20}
                                         height={20}
                                         src={close}
                                         style={{cursor: "pointer"}}
                                    />
                            </div>
                        </Row>
                    </Card>

            )}

        </Container>
    );
});

export default Basket;
