/*
 * @Author: weizhiqiang
 * @Date: 2023-12-06 20:06:03
 * @LastEditors: weizhiqiang
 * @LastEditTime: 2023-12-06 23:26:57
 * @FilePath: /list-demo/src/App.js
 * @Description: 活动列表页
 */
import './App.css';
// import { useState, useEffect, } from 'react';
// import { handDodatas } from './helper';
// import Countdown from "react-countdown";


// const reqUrl = 'https://systemjs.1688.com/krump/schema/1352.json';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginForm from './page/Login/index';
import RegisterForm from './page/Register/index';


function App() {
  // // 列表数据  
  // const [conList, setConList] = useState([]);


  // useEffect(() => {
  //   handList();
  // }, []);

  // /**
  //  * @description: 获取活动列表
  //  * @return {void}
  //  */
  // const handList = () => {
  //   fetch(reqUrl).then(res => {
  //     return res.json();
  //   }).then(data => {
  //     const { list } = data;
  //     setConList(handDodatas(list));
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }

  return (
    <div className="App">
      {/* {
        conList.map((item, index) => {
          return <div key={index + 1} className='Itemli'>
            <div className='Mon'><span className='Tex'>{item.money}</span>元</div>
            <div className='Cen'>
              <div className='Title'>{item.title}</div>
              <div className='Des'>{item.description}</div>
              {item.restTime ? <div className='Enet'>
                <Countdown date={item.restTime}
                  renderer={time => {
                    const { hours, minutes, seconds } = time.formatted
                    return (
                      <div className='Nums'>距结束 <span className='Blocknum'>{hours}</span> : <span className='Blocknum'>{minutes}</span> : <span className='Blocknum'>{seconds}</span></div>
                    )
                  }}
                />
              </div> : <div className='Enet'>有效期{item.timeStart} - {item.timeEnd}</div>}
            </div>
            <div className='Btn'>{item.status}</div>
          </div>
        })
      } */}
      {/* 登录注册 */}
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
