/**
 * @Description: 合并 reducers，导出经过处理的 reducers 返回状态类型
 * @Version:
 * @Author: Richard Wang
 * @Date: 2022年4月25日01:07:42
 * @LastEditors:
 * @LastEditTime: 2022年4月25日13:34:25
 */
import bankReducer from "./bankReducer"
import {combineReducers} from "redux";

const reducers = combineReducers({
    bank: bankReducer});

export default reducers;

// 导出经过处理的 reducers 返回状态类型，让页面可以指定为此类型
export type State = ReturnType<typeof reducers>