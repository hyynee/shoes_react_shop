import React from 'react';
import ReactDOM from 'react-dom/client';
// antd
import 'antd/dist/reset.css'
import './index.css'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from './pages/Home';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import DemoHookRedus from './pages/HooksRedus/DemoHookRedus';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeTemplates from './templates/HomeTemplates';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import UseNavigativeDemo from './pages/Hooks/UseNavigativeDemo';
import Profile from './pages/Profile';
import ForcusPassword from './pages/ForcusPassword';
import UseSearchParamDemo from './pages/UseSearchParamsDemo/UseSearchParamDemo';
import DemoAntd from './pages/DemoAntd';
import DeMoHoc from './pages/DeMoHoc';


// custom history
import {createBrowserHistory} from 'history'
import MovieHome from './pages/Movie/MovieHome';
import MovieId from './pages/Movie/MovieId';
import TableCart from './pages/TableCart';
export const customNavigate = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={customNavigate}>
    <Routes>
      <Route path='' element={<HomeTemplates></HomeTemplates>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='detail'>
              <Route path=':id'  element={<Detail></Detail>}></Route>
          </Route>
          <Route path='usestatedemo' element={<UseStateDemo></UseStateDemo>}></Route>
          <Route path='useeffectdemo' element={<UseEffectDemo></UseEffectDemo>}></Route>
          <Route path='userefdemo' element={<UseRefDemo></UseRefDemo>}></Route>
          <Route path='appchat' element={<DemoHookRedus></DemoHookRedus>}></Route>
          <Route path='usenavigatedemo' element={<UseNavigativeDemo></UseNavigativeDemo>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='forcuspassword' element={<ForcusPassword></ForcusPassword>}></Route>
          <Route path='usesearchparams' element={<UseSearchParamDemo></UseSearchParamDemo>}></Route>
          <Route path='demohoc' element={<DeMoHoc></DeMoHoc>}></Route>
          <Route path='demoantd' element={<DemoAntd></DemoAntd>}></Route>
          <Route path='movie' element={<MovieHome></MovieHome>}></Route>
          <Route path='movieDetail'>
            <Route path=':movieid' element={<MovieId></MovieId>}></Route>
          </Route>
          <Route path='cart' element={<TableCart></TableCart>}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);

