import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { loginActionApi } from '../redux/reducer/userReducer'
import { useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:yup.object().shape({
      email:yup.string().email('email is invalid'),
      password:yup.string().required('password cannot be blank')
    })
    ,
    onSubmit:(values,e) => {
      console.log(e)
        const action = loginActionApi(values);
        dispatch(action);
    }
  })
  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
      <h3>Login</h3>
        <div className="form-group">
          <p>Email</p>
          <input className='form-control' type="email" name="email" id="email" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
          {frmLogin.errors.email && <span className='text-danger'> {frmLogin.errors.email}</span>}
        </div>
        <div className="form-group">
          <p>Password</p>
          <input className='form-control' type="password" name="password" id="password" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
          {frmLogin.errors.password && <span className='text-danger'> {frmLogin.errors.password}</span>}
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-success mt-2'>Login</button>
        </div>
    </form>
  )
}

export default Login