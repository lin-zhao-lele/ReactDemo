// React 框架的核心包
import React from 'react';
// ReactDOM 渲染相关的包
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 根组件
import App from './App';
import reportWebVitals from './reportWebVitals';

// 渲染根组件App到id为root的dom节点上
// public目录下有个index.html文件 上面能找到root节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // useEffect的执行时机
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

//index.js是链接react与html模板的桥梁，所有的react组件最终都是由他进行渲染到html模板中。
//然后整个文件中引入了一个系统默认生成的组件App，由index.js进行渲染。

reportWebVitals();
