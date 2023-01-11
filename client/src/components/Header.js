import React, { useContext } from 'react'
import { Context } from '../index';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'

const Header = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token')
    }

    return (
        <Navbar className='mb-5' bg="dark" variant="dark">
            <Container>
                <NavLink className="text-decoration-none" style={{ color: "white" }} to={ADMIN_ROUTE}>Cigarettes</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} style={{ marginLeft: 20 }}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    )
})

export default Header;