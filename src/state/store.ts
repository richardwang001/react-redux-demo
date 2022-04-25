/**
 * @Description:  `store` 文件来保存 `ruducers,
 * preloadState 对象， 和中间件（applyMiddleware）`
 * @Version:
 * @Author: Richard Wang
 * @Date: 2022年4月25日07:54:16
 * @LastEditors:
 * @LastEditTime: $
 */
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// createStore 方法显示已过时，替代方案日后研究
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);