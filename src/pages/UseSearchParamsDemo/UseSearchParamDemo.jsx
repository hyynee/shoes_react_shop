import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamDemo = () => {
    const [searchParams,setSearchParams] = useSearchParams('');
    const keywordRef = useRef('');
    const keyword = searchParams.get('keyword') // neu k cos tra ve null
    const [arrProd,setArrProd] = useState([])
    const getProdByKeyword = async() => {
        // console.log("q",keyword)
        const res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method: "GET"
        })
        // lay data tu api de setState array product
        setArrProd(res.data.content)
    }
    useEffect(() => {
        if(keyword!=null) {
            // call api khi keyword khac null
            getProdByKeyword();
        }
    },[keyword])
    const handleChange = (e) => {
        const {value} = e.target;
        keywordRef.current = value
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("keyword",keywordRef.current);
        // dau keyowrd len thanh url
        setSearchParams({
            keyword: keywordRef.current
        })
    }
  return (
    <div className='container'>
        <h3>Search</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className='form-control' id='txtTukhoa' onChange={handleChange}/>
                <button className='btn btn-dark text-white mt-2' type='submit'>Search</button>
            </div>
        </form>
        <div className="mt-2">
            <h3>Search Result</h3>
            <div className="row">
            {arrProd.map((item) => {
                return  <div className="col-3" key={item.id}>
                <div className="card">
                    <img src={item.image} alt="..." />
                    <div className="card-body">
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                        <NavLink to={`/detail/${item.id}`} className='btn btn-dark text-white'> view detial</NavLink>
                    </div>
                </div>
            </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default UseSearchParamDemo