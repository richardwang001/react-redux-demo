/**
 * @Description:  `store` 文件来保存 `reducers,
 * preloadState 对象， 和中间件（applyMiddleware）`
 * @Version:
 * @Author: Richard Wang
 * @Date: 2022年4月25日07:54:16
 * @LastEditors:
 * @LastEditTime: $
 */
// import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { configureStore } from '@reduxjs/toolkit'

// createStore 方法显示已过时
// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// );

// 最新 store 配置方法
export const store = configureStore({ reducer: reducers, middleware: [thunk] as const })
