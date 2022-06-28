import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom"
import {ADMIN_ROUTE, DEVICE_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import "../styles/style.css";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
    }

    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin) {
        user.setIsAdmin(true)
    }

    return (
        <Navbar bg="warning" variant="warning">
            <Container className="navbar-container">
                <NavLink className="d-flex row align-items-center"  style={{color:'black', fontSize: 20}} to={SHOP_ROUTE}>TehnoShop</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto nav-menu" style={{color: 'black'}}>
                        <Button
                            variant={"outline-dark"}
                            className="me-2 nav-btns"
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            Корзина
                        </Button>
                        {user.isAdmin ?
                            <Button
                                variant={"outline-dark"}
                                className="nav-btns"
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            variant={"outline-dark"}
                            onClick={() => logOut()}
                            className="ms-2 nav-btns"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto nav-menu" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            className="nav-btns"
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;