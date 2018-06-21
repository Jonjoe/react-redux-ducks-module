import * as types from "./actionTypes";

export interface IState {
  fetching: boolean;
  fetched: boolean;
  error: string;
  collection: IDataPoint[];
}

export interface IDataPoint {
  _id: number;
  __v: number;
}

interface IInitAction {
  type: types.FETCH_RESOURCE;
}

interface ISuccessAction {
  type: types.FETCH_RESOURCE_FULFILLED;
  data: string;
}

interface IFailureAction {
  type: types.FETCH_RESOURCE_REJECTED;
  error: string;
}

export type IActions = IInitAction | ISuccessAction | IFailureAction;
