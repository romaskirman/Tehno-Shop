import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex brand-bar w-100">
            {device.brands.map(brand =>
                <Card
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    style={{width: 'initial', cursor: 'pointer'}}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    className="p-3 brand-card"
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;