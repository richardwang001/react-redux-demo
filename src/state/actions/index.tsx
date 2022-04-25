/**
 * @Description: 运用枚举类后的 type 文件，存放各种 action 的 type
 * @Version:
 * @Author: Richard Wang
 * @Date: 2022-04-25
 * @LastEditors:
 * @LastEditTime: $
 */
import {ActionType} from "../action-types";

interface DepositAction {
    type: ActionType.DEPOSIT;
    payload: number;
}

interface WithdrawAction {
    type: ActionType.WITHDRAW;
    payload: number;
}

interface BankruptAction {
    type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;

