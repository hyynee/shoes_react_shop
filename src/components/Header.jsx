import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { customNavigate } from '..';
import ContaineComponent from '../pages/HOC/ContaineComponent';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { loginAction } from '../redux/reducer/userReducer';
import { clearStorageJSON, USERLOGIN } from '../util/config';
import Login2 from '../pages/Login2';
import Register2 from '../pages/Register2';
const Header = (props) => {
    const userLogin = useSelector(state => state.userReducer.userLogin);
    const cartList = useSelector(state => state.itemReducer.cartList);
    console.log("cart",cartList) // rỗng
    const [component, setComponent] = useState(<Login></Login>);
    const dispatch = useDispatch();
    const renderLoginLink = () => {
        if (userLogin.accessToken) {
            return <>
                <NavLink className="nav-link" to='profile'>
                    hello!{userLogin.email}
                </NavLink>
                <button className='btn btn-light text-dark fs-6 ' onClick={() => {
                    clearStorageJSON(USERLOGIN);
                    // ditpatch
                    const action = loginAction({});
                    dispatch(action)
                    window.location.reload(); // f5 lai web
                    // customNavigate.push('/login')
                }}>Logout</button>
            </>
        }
        return <button data-bs-toggle="modal" data-bs-target="#modalId" type="button" className="btn btn-light text-dark fs-6 mx-2" onClick={() => {
            // setComponent(<Login></Login>);
            setComponent(<Login2></Login2>)
        }}>Login</button>
    }
    const tongTien = () => {
        let toTal = 0;
        for(let item of cartList) {
            toTal += item.quantity * item.price;
        }
        return toTal.toLocaleString();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark w-100">
            <NavLink className="navbar-brand" href="#">Home pages</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0" style={{width: '10%'}}>
                    <NavLink className="nav-link active" to='/' aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    <NavLink className="nav-link active" to='/movie' aria-current="page">Movie</NavLink>
                    {/* <NavLink className="nav-link active" to="register" aria-current="page">Register <span className="visually-hidden">(current)</span></NavLink> */}
                    {/* <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="usestatedemo">Use State Demo</NavLink>
                            <NavLink className="dropdown-item" to='useeffectdemo'>Use Effect Demo</NavLink>
                            <NavLink className="dropdown-item" to='userefdemo'>Use Ref Demo</NavLink>
                            <NavLink className="dropdown-item" to='appchat'>APP CHAT -  redux hooks</NavLink>
                            <NavLink className="dropdown-item" to='usenavigatedemo'>Use Navigate Demo</NavLink>
                            <NavLink className="dropdown-item" to='usesearchparams'>Use Search Demo</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='demohoc'>demo Hoc</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='demoantd'>Demo Antd</NavLink>
                    </li> */}
                </ul>
                <form className="d-flex my-2 my-lg-0" style={{width: '80%'}}>
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                    <button data-bs-toggle="modal" data-bs-target="#modalId" type="button" className="btn mx-2 btn-light text-dark fs-6" onClick={() => {
                        // setComponent(<Register></Register>)
                        setComponent(<Register2></Register2>)
                    }}>Register</button>
                    {renderLoginLink()}
                    <div className='d-flex'>
                        <NavLink to="/cart"><i className="fa fa-cart-plus fs-6">({cartList.length} - {tongTien()})</i></NavLink>
                    </div>
                </form>
            </div>
            <ContaineComponent component={component}></ContaineComponent>

        </nav>
    )
}

export default Header