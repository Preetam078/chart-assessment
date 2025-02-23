export interface IUserData {
    [key: string]:number;
}

export interface IUserGrowth {
    users: {
        totalUsers: any;
        activeUsers: any;
    };
}

export interface IUserGrowthHandler {
    getUserGrowthData: (a:string, b:string) => void;
}

export interface IUserGrowthState {
    users: {
        totalUsers: number;
        activeUsers: number;
    };
}

export interface IUserGrowthResponse {
    totalUsers: number;
    activeUsers: number;
}

export interface IUserGrowthStore extends IUserGrowth, IUserGrowthHandler {}