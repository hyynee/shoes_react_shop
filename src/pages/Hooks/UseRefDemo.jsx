import React, { useRef, useState } from 'react'
import Cart from './Cart'

const UseRefDemo = () => {
    // const [userLogin,setUserLogin] = useState({
    //     username: '',
    //     password: '',
    // });
    // use ref
    const userLoginRef = useRef({
        username: "",
        password: "",
    })
    console.log("render")
    const handleChange = (e) => {
        const {id,value} = e.target;
        // setUserLogin({
        //     ...userLogin,
        //     [id] : value
        // })
        userLoginRef.current[id] = value;
    }
    const elementRef = useRef({});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login",userLoginRef.current);
        elementRef.current.handleLike();
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>login</h3>
        <div className="form-group">
            <p>user name</p>
            <input type="text" name="username" id="username" className='form-control' onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>password</p>
            <input type="password" name="password" id="password" className='form-control' onChange={handleChange} />
        </div>
        <div className="form-group">
            <button ref={elementRef} className='btn btn-success my-2'>Login</button>
        </div>
        <hr />
        <hr />
        <h4>Cart</h4>
        <Cart ref={elementRef}></Cart>
    </form>

  )
}

export default UseRefDemo