import React from 'react';
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Row, Card} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex mt-2 device-list">
            {device.devices.map( device =>
                <DeviceItem key={device.id} device={device}/> // передаём текущий элемент итерации>
            )}
        </Row>
    );
});

export default DeviceList;