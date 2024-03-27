import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllPhimAPI } from '../../redux/reducer/movieReducer';
import { http } from '../../util/config';

const MovieId = () => {
    const arrFilm = useSelector(state => state.movieReducer.arrPhim);
    const dispatch = useDispatch();
    const getFilmApi = () => {
        const action = getAllPhimAPI();
        dispatch(action);
    }
    useEffect(() => {
        getFilmApi();
    }, [])
    const params = useParams();
    console.log("params", params.movieid);
    console.log("arr", arrFilm)
    const [filmDetail, setFilmDetail] = useState({});
    const getFilmDetail = async () => {
        const res = await http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${params.movieid}`)
        setFilmDetail(res.data.content)
    }
    useEffect(() => {
        getFilmDetail()
    }, [params.movieid])
    return (
        <div className='container bg-white text-dark'>
            <div className="row mt-2">
                <div className="col-4">
                    <div className="card">
                        <img src={filmDetail.hinhAnh} alt="..." style={{ overflow: 'hidden', objectFit: 'cover', width: '70%' }} />
                    </div>
                </div>
                <div className="col-8">
                    <h1>{filmDetail.tenPhim}</h1>
                    <p>{filmDetail.moTa}</p>
                    <p>{filmDetail.ngayKhoiChieu}</p>
                    <p>{filmDetail.danhGia}
                        <i className='fa fa-star text-warning'></i>
                    </p>
                    <button className='btn btn-success mt-2'>Add to carts</button>
                </div>
            </div>
            <div className='mt-2'>
                <h3>Related Product</h3>
                <div className="row">
                    {arrFilm?.map((item) => {
                        return <div className="col-4 mt-4" key={item.maPhim}>
                            <div className="card">
                                <img src={item.hinhAnh} alt="..." style={{ overflow: 'hidden', objectFit: 'cover', width: '100%' ,height: 350}} />
                                <div className="card-body">
                                    <h3>{item.tenPhim}</h3>
                                    <p>{filmDetail.danhGia}
                                        <i className='fa fa-star text-warning'></i>
                                    </p>
                                    <NavLink className='btn btn-success' to={`/movieDetail/${item.maPhim}`}>view detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieId