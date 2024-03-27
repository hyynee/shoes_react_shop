import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { https } from '../util/config';

const Detail = () => {
    const [productDetail, setProductDetail] = useState({
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        feature: false,
        description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        size: ["36", "37", "38", "39", "40", "41", "42"],
        shortDescription:
            "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
        categories: [
            {
                id: "ADIDAS",
                category: "ADIDAS",
            },
            {
                id: "MEN",
                category: "MEN",
            },
            {
                id: "WOMEN",
                category: "WOMEN",
            },
        ],
        relatedProducts: [
            {
                id: 2,
                name: "Adidas Prophere Black White",
                alias: "adidas-prophere-black-white",
                feature: false,
                price: 450,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                image:
                    "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
            },
            {
                id: 3,
                name: "Adidas Prophere Customize",
                alias: "adidas-prophere-customize",
                feature: false,
                price: 375,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                image:
                    "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
            },
            {
                id: 5,
                name: "Adidas Swift Run",
                alias: "adidas-swift-run",
                feature: false,
                price: 550,
                description:
                    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription:
                    "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
            },
        ],
    });
    const params = useParams();
    console.log("params", params.id);
    const getProductDetail = async () => {
        const res = await https.get(`/Product/getbyid?id=${params.id}`)
        setProductDetail(res.data.content)
    }
    useEffect(() => {
        getProductDetail()
    },[params.id])
    return (
        <div className='container'>
            <div className="row mt-2">
                <div className="col-4">
                    <div className="card">
                        <img src={productDetail.image} alt="..." />
                    </div>
                </div>
                <div className="col-8">
                    <h3>{productDetail.name}</h3>
                    <h4>{productDetail.price}</h4>
                    <p>{productDetail.description}</p>
                    <p>{productDetail.shortDescription}</p>
                    <button className='btn btn-success mt-2'>Add to carts</button>
                </div>
            </div>
            <div className='mt-2'>
                <h3>Related Product</h3>
                <div className="row">
                    {productDetail.relatedProducts?.map((item) => {
                        return <div className="col-4" key={item.id}>
                            <div className="card">
                                <img src={item.image} alt="" />
                                <div className="card-body">
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}</h4>
                                    <NavLink className='btn btn-success' to={`/detail/${item.id}`}>view detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Detail