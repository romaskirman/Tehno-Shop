import React, {useContext, useState} from 'react';
import {Container, Form, FormControl, Button, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import "../styles/style.css";
import {registration, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if(isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            if (email === "admin@mail.ru") {
                user.setIsAdmin(true)
                localStorage.setItem('admin', JSON.stringify(true))
            }
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex mt-3">
                        <div className="d-flex justify-content-between">
                            {isLogin ?
                                <div className="d-flex align-items-start auth-text">
                                    Нет аккаунта? <NavLink className="py-0 px-1" to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                                </div>
                                :
                                <div className="d-flex align-items-start auth-text">
                                    Есть аккаунт? <NavLink className="py-0 px-1" to={LOGIN_ROUTE}>Войдите.</NavLink>
                                </div>
                            }
                            <Button
                                onClick={click}
                                variant={"outline-success"}
                                className="btn-auth"
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </div>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;