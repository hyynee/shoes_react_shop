import React, { useState } from 'react'
import ContaineComponent from './HOC/ContaineComponent'
import Home from './Home';
import Login from './Login'
import Register from './Register';



export default function DeMoHoc() {
    const [component,setComponent] = useState(<Login></Login>);
  return (
    <div className='container'>
        <button data-bs-toggle="modal" data-bs-target="#modalId" type="button" className="btn btn-primary btn-lg">Login</button>
        <button data-bs-toggle="modal" data-bs-target="#modalId" type="button" className="btn btn-primary btn-lg" onClick={() => {
            setComponent(<Register></Register>)
        }}>Register</button>
        <ContaineComponent component={component}></ContaineComponent>
    </div>
  )
}
