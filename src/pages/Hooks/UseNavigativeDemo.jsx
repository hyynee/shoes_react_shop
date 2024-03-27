import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigativeDemo = () => {
    const navigate = useNavigate(); // hook dung de chuyen huong trang trong func component 
    const userLogin = useRef({
        email: '',
        password:''
    })
    const handleChange = (e) => {
        const {id,value} = e.target;
        userLogin.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userLogin.current.email === "trang2409@gmail.com" && userLogin.current.password === "24092004") {
            // dung
            navigate("/profile")
        } else {
            // sai
            navigate("/forcuspassword")
        }
    }
  return (
    <div className='container d-flex justify-content-center aligns-item-center'>
        <div className="card w-25">
            <div className="bg-dark text-white text-center">
                <h3>login</h3>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>email</p>
                        <input type="text" className='form-control' id='email' onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <p>password</p>
                        <input type="password" className='form-control' id='password'onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary mt-2'>Login</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UseNavigativeDemo