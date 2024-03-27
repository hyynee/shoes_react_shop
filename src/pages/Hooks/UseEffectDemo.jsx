import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {

    const [number,setNumnber] = useState(100);
    const [like,setLike] = useState(100);
    console.log("render")
    // 1 tham so
    useEffect(() => {
        // chay lan dau tien va moi khi state thay doi
        console.log("useEffect run");
        // khong  setState tai day (muon setState thi phai co if )
        // giong lifecycle componentDidmount + componentDidupdate
    });
    useEffect(() => {
        // dung cho cac api dang getDetail (component didupdate)
        console.log("useEffect deps")
    },[number]);
    useEffect(() => {
        // call api dang getAll tuong tu componentdidmount
    },[]);
    useEffect(() => {
        return () => {
            // kich hoat khi component mat khoi giao dien
            // clear di cac bien chay ngam
        console.log("will unmount")
        }
    },[]);

  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-warning' onClick={() => {
            setNumnber(number + 1)
        }}>+</button>
        <hr />
        <h3>Like: {like}</h3>
        <button className='btn btn-danger mx-2' onClick={() => {
            setLike(like + 1)
        }}>Unlike</button>
    </div>
  )
}

export default UseEffectDemo