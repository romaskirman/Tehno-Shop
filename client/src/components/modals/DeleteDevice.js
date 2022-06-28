import React from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {useState} from "react";
import {deleteDevice} from "../../http/deviceAPI";

const DeleteDevice = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const delDevice = () => {
        deleteDevice(value).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название устройства"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={delDevice}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteDevice;