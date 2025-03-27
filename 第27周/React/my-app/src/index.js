// index.js 是项目的入口，从这里开始运行

// React 必要的两个核心包 React from 'react' 和 ReactDOM from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 导入项目的根组件 App
import App from './App';
import reportWebVitals from './reportWebVitals';

// 把App根组件渲染到id为root的DOM节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
