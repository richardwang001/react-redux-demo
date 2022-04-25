/**
 * @Description: 运用枚举类后的 react-redux reducer
 * @Version: 1
 * @Author: Richard Wang
 * @Date: 2022-04-25
 * @LastEditors:
 * @LastEditTime: $
 */
import {Action} from "../actions";
import {ActionType} from "../action-types";

const initialState = 0;

/**
 * 一个 react-redux reducer 函数，根据 state 和 action 匹配相应的操作
 * @param state 旧的状态
 * @param action 自定义的操作名称
 */
const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
}
export default reducer;