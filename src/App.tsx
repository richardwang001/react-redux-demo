/**
 * 2022年4月25日13:38:34
 */

import React from 'react';
import {actionCreator,State} from "./state";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";

function App() {

    // 使用调度方法 useDispatch()
    const dispatch = useDispatch();

    // 让调度方法绑定 actionCreator，解构出我们需要的函数
    const {depositMoney,withdrawMoney,bankrupt} = bindActionCreators(actionCreator,dispatch)

    // 使用选择器选择我们需要的状态，要在 reduces 中定义状态类型并导出，然后才能在这里导入和引用
    const amount = useSelector((state:State)=>state.bank)

  return (
    <div className="App">

        {/*选择器选择出来的状态 amount*/}
      <h1>{amount}</h1>

        {/*使用解构出来的函数*/}
      <button onClick={()=>{depositMoney(1000)}}>Deposit</button>
      <button onClick={()=>{withdrawMoney(200)}}>Withdraw</button>
      <button onClick={()=>{bankrupt()}}>Bankrupt</button>
    </div>
  );
}

export default App;
