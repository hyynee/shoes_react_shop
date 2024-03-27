import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginActionApi } from '../redux/reducer/userReducer'
import { useDispatch } from 'react-redux'
import { Button, Checkbox, Form, Input } from 'antd';
import Register2 from './Register2'

const Login2 = () => {
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("email cannot be blank").email('email is invalid'),
      password: yup.string().required('password cannot be blank')
    })
    ,
    onSubmit: (values, e) => {
      console.log(e)
      const action = loginActionApi(values);
      dispatch(action);
    }
  })
  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
      <Form>
        <label>Email: </label>
        <Input className='form-control' type="email" name="email" id="email" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
        {frmLogin.errors.email && <span className='text-danger'> {frmLogin.errors.email}</span>}
      </Form>
      <Form className='mt-2'>
        <label>Password: </label>
        <Input className='form-control' type="password" name="password" id="password" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
        {frmLogin.errors.password && <span className='text-danger'> {frmLogin.errors.password}</span>}
      </Form>
      <div className="form-group">
        <button type='submit' className='btn btn-success mt-2'>Login</button>
      </div>
      {/* <Form className="mt-2">
        <label>Chưa có tài khoản...
          <NavLink to='/register' className='text-decoration-none' >
            Đăng ký ngay</NavLink>
        </label>
      </Form> */}
    </form>
  )
}

export default Login2