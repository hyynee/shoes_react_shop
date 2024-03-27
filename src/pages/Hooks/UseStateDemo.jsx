import React, { useState } from 'react'

const UseStateDemo = (props) => {

    const [number,setNumber] = useState(24092004);
    const [img,setImg] = useState("https://i.pravatar.cc?u=10");
    const [fontSize,setFontsize] = useState(16);
    const changeFontsize = (size) => {
        let newSize = fontSize + size;
        setFontsize(newSize);
    }
  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-danger mx-2' onClick={() => {
            setNumber(number + 1)
        }}>+</button>
        <hr />
        <div className='mt-2'>
            <h3>IMAGE</h3>
            <div className="card w-25">
                <img src={img} alt="..." />
                <div className="card-body">
                    <button className='btn btn-success mt-2' onClick={() => {
                        let newImg= `https://i.pravatar.cc?u=${Math.floor(Math.random()*100)}`
                        setImg(newImg)
                    }}>random</button>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <h3>Vi du 3: tang giam FS</h3>
            <p style={{fontSize: fontSize}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, asperiores?</p>
            <button className='btn btn-danger mx-2' onClick={() => {
                changeFontsize(5)
            }}>+</button>
            <button className='btn btn-danger mx-2' onClick={() => {
                changeFontsize(-5)
            }}>-</button>
        </div>
    </div>
  )
}

export default UseStateDemo