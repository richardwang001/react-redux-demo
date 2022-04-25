/**
 * @Description: 调度操作函数
 * @Version:
 * @Author: Richard Wang
 * @Date: 2022年4月25日01:22:43
 * @LastEditors:
 * @LastEditTime: $
 */
import {Dispatch} from "redux";
import {ActionType} from "../action-types";
import {Action} from "../actions";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
      dispatch({
          type: ActionType.DEPOSIT,
          payload: amount
      })
  }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}

