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

export interface IAction {
  type: string;
  data?: IDataPoint[];
  error?: string;
}
