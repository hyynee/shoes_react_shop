import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentActione } from '../../redux/reducer/appchatReducer';


const DemoHookRedus = () => {
    const arrComment = useSelector(state => state.appchatReducer.arrComment) 
    const dispatch = useDispatch()
    console.log("arrComment",arrComment);
    const userCommentRef = useRef({
        name: '',
        content: ''
    });
    const handleChange = (e) => {
        const {id,value} = e.target;
        userCommentRef.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("comment",userCommentRef.current)
        // dua du liue comment len reducer
        // tao ra action
        const action = addCommentActione(userCommentRef.current);
        // dua len redux
        dispatch(action)
    }
  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                {arrComment.map((user,index) => {
                    return <div className="d-flex mt-2" key={index}>
                    <img style={{width: "4%"}} src={`https://i.pravatar.cc?u=${user.name}`} alt="..." />
                    <div className='m-2'>
                        <h3>{user.name}</h3>
                        <p>{user.content}</p>
                    </div>
                </div>
                })}
            </div>
            <div className="card-body">
                <form action="" className='form' onSubmit={handleSubmit}>
                    <div className="form-group">
                    <p>name</p>
                    <input type="text" name='name' id='name' className='form-control' onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                    <p>content</p>
                    <input type="text" name='content' id='content' className='form-control' onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success mt-2'>Post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default DemoHookRedus