import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { https } from '../util/config'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate();
  // lay du lieu tu form
  const frm = useFormik({
    initialValues: {
      email: '',
      password: '',
      gender: 'true',
      name: '',
      phone: '',
    },
    onSubmit: async(values) => {
      console.log("first", values) // lay du lieu tu form
      try {
        const res = await https.post('/Users/signup',values);
      alert.log("res",res.data?.message)
      navigate('/login')
      } catch(err) {
        alert(err.response.data?.message)
      }
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("email cannot be blank").email("email is not valid"),
      password: yup.string().required("pass cannot be blank").min(6," 6 - 32 character").max(32,' 6 - 32 character '),
      name: yup.string().required("name cannot be blank"),
      phone: yup.string().required(" phone cannot be blank").matches("^[0-9\-\+]{9,15}$",'phone is numbers')
    })
  })
  return (
    <form className='container' onSubmit={frm.handleSubmit}>
      <h3>Register</h3>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>Email</p>
            <input type="email" className='form-control' id='email' name='email' onInput={frm.handleChange} onBlur={frm.handleBlur}/>
           {frm.errors.email && <span className='text-danger'>{frm.errors.email}</span> }
          </div>
          <div className="form-group">
            <p>Password</p>
            <input type="password" className='form-control' id='password' name='password' onInput={frm.handleChange}  onBlur={frm.handleBlur}/>
        {frm.errors.password &&   <span className='text-danger'>{frm.errors.password}</span>}
          </div>
          <div className="form-group mt-2">
            <p>Gender</p>
            <input type="radio" className='form-check-input' id='genderMale' name='gender' value={true} onInput={frm.handleChange} />
            <label for="genderMale">Male</label>
            <input type="radio" className='form-check-input' id='genderFemale' name='gender' value={false} /> <label for='genderFemale' onInput={frm.handleChange}>Female</label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <p>Name</p>
            <input type="text" className='form-control' id='name' name='name' onInput={frm.handleChange}  onBlur={frm.handleBlur}/>
            {frm.errors.name && <span className='text-danger'>{frm.errors.name}</span>}
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input type="number" className='form-control' id='phone' name='phone' onInput={frm.handleChange}  onBlur={frm.handleBlur}/>
          {frm.errors.phone &&  <span className='text-danger'>{frm.errors.phone}</span>}
          </div>
          <div className="form-group mt-2">
            <button type='submit' className='btn btn-success' disabled={!frm.isValid}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register