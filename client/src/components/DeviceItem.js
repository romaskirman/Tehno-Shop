import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3 device-item"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="device-item-card" style={{border: "none", width: 160, cursor: 'pointer', display: "flex", flexDirection: "column"}}>
                <Image className="device-item-img" width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/><br/>
                <div className="device-item-fs" style={{width: '90%', margin: '0 auto', flexGrow: 1, textalign: 'center'}}>{device.name}<br/>
                    <strong>цена:</strong> {device.price} BYN</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;