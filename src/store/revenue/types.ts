export interface IRevenueState {
    advertisements: number;
    subscriptions: number;
}

export interface IRevenueHandler {
    getRevenueData: (filter:string, subFilter:string) => void;
}

export interface IRevenueStore extends IRevenueState, IRevenueHandler {}