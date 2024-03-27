import axios from 'axios'
import { customNavigate } from '..';
// cau hinh he thong
export const DOMAIN = "https://shop.cyberlearn.vn/api";
export const USERLOGIN = "userLogin";
export const TOKEN = "accessToken";
const tokenCybersoft = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjE1LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODQwOTYwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE4NTU3MjAwfQ.vY7VplGBpsG599RYLEeMeajQNALOV5QUJ2dGV6Ow_q4`;
export const DOMAIN2 = 'https://movienew.cybersoft.edu.vn/api'
// cau hinh api gui di
export const https = axios.create({
    baseURL: DOMAIN, // domain cua tat ca request
    timeout: 30000 // thoi gian request ton tai
})
export const http = axios.create({
    baseURL: DOMAIN2,
    timeout: 30000
})

// cau hinh localStorage
export const {saveStorageJSON, getStorageJSON, clearStorageJSON} = {
    saveStorageJSON: (name,data) => {
        let sData = JSON.stringify(data) 
        localStorage.setItem(name,sData);
    },
    getStorageJSON: (name) => {
        if(localStorage.getItem(name)) {
            let sData = localStorage.getItem(name);
            let data =JSON.parse(sData);
            return data;
        }
        return {};
    },
    clearStorageJSON: (name) => {
        localStorage.removeItem(name)
    }
}


// cau hinh dung chung request
https.interceptors.request.use((config) => {
    //headers: dev dinh nghia
    //data(body): lay tu input hoac cac tham so tu phia client
    config.headers = {...config.headers}
    let token = getStorageJSON(USERLOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`

    return config;
}, (err) => {
    return Promise.reject(err);
})


// cau hinh movie
http.interceptors.request.use((config) => {
    config.headers['TokenCybersoft'] = tokenCybersoft;
    return config;
}, (err) => {
    return Promise.reject(err);
})


// CAU HINH CHO RESPON (KET QUA TRA VE TU API)
http.interceptors.response.use((res) =>{
    return res;
}, (err) => {
    // xu ly loi cho api
    // console.log("err",err);
    if(err.response?.status === 401) {
        customNavigate.push('/login')
    }
    return Promise.reject(err)
})