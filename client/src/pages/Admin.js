import React, {useState} from 'react';
import {Container, Button} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteDevice from "../components/modals/DeleteDevice";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [delDeviceVisible, setDelDeviceVisible] = useState(false)

    const navigate = useNavigate()

    return (
        <Container className="d-flex flex-column">
            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Добавить тип
            </Button>
            <Button
                onClick={() => setBrandVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Добавить брэнд
            </Button>
            <Button
                onClick={() => setDeviceVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Добавить устройство
            </Button>
            <Button
                onClick={() => setDelDeviceVisible(true)}
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Удалить устройство
            </Button>
            <Button
                onClick={() => navigate(SHOP_ROUTE)}
                variant={"outline-primary"}
                className="mt-4 p-2"
            >
                Назад
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteDevice show={delDeviceVisible} onHide={() => setDelDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;