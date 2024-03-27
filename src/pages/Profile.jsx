import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActionApi } from '../redux/reducer/userReducer';

const Profile = () => {
  const userProfile = useSelector(state => state.userReducer.userProfile);
  const dispatch = useDispatch();
  const getProfileApi = async() => {
    // goi api su dung redux async action 
    // vua vao trang dispatch api getProfile
    const action = profileActionApi();
    dispatch(action)
  }
  useEffect(() => {
    getProfileApi();
  },[])
  return (
    <div className='container'>
      <h3>Hello!{userProfile.email}</h3>
    </div>
  )
}

export default Profile