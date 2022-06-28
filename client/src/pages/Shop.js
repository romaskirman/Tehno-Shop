import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    if (window.innerWidth > 1000)
    {

        return (<Container>
                <Row className="mt-2">
                    <Col md={3}>
                        <div className="border-0 d-flex flex-column">
                            <div className="border-0 d-flex flex-row align-items-center justify-content-between">
                                <h3 className="filter">Фильтры</h3>
                                <h5 className="brand-filter">Брэнды</h5>
                            </div>
                            <div className="border-0 d-flex flex-row align-items-center justify-content-start">
                                <h5>Типы</h5>
                            </div>
                        </div>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <DeviceList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
        );
    }
    else {
        return (<Container>
                <Row className="mt-2">
                    <Col md={12} className="d-flex flex-column align-items-center justify-content-center">
                        <div className="border-0 w-100 d-flex flex-column align-items-center justify-content-center">
                            <div className="border-0 filter-block d-flex flex-row align-items-center justify-content-center">
                                <h3 className="filter">Фильтры</h3>
                            </div>
                        </div>
                        <div className="d-flex w-100 flex-row align-items-start justify-content-between">
                            <div className="type-block d-flex flex-column align-items-start justify-content-start">
                                <h5 className="m-0 mb-2">Типы</h5>
                                <TypeBar/>
                            </div>
                            <div className="brand-block d-flex flex-column align-items-start justify-content-start">
                                <h5 className="brand-filter m-0 mb-2">Брэнды</h5>
                                <BrandBar/>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="device-list-block d-flex flex-column align-items-start">
                        <DeviceList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
        );
    }
});


export default Shop;