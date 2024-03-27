import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPhimAPI } from '../../redux/reducer/movieReducer';

const MovieHome = () => {
    const arrFilm = useSelector(state => state.movieReducer.arrPhim);
    const dispatch = useDispatch();
    const getFilmApi = () => {
        const action = getAllPhimAPI();
        dispatch(action);
    }
    useEffect(() => {
        getFilmApi();
    }, [])
    return (
        <div className='container'>
            <h3 className=''>Danh sach phim</h3>
            <div className="row">
                {arrFilm.map((item) => {
                    return <div className="col-3 mt-4">
                        <div class="card" key={item.maPhim}>
                            <img
                                src={item.hinhAnh}
                                width={'100%'}
                                alt="Palm Springs Road"
                                style={{ overflow: 'hidden', objectFit: 'cover',height:430}}
                            />
                            <div class="card-body">
                                <h3 class="card-title">{item.tenPhim}</h3>
                                <p>{item.moTa.length > 100 ? item.moTa.substr(0,85) + '...' : item.moTa}</p>
                                <NavLink className="btn btn-primary" data-mdb-ripple-init to={`/movieDetail/${item.maPhim}`}>Xem chi tiết</NavLink>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default MovieHome