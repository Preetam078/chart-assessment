export interface IUserData {
    [key: string]:number;
}

export interface IUserGrowth {
    users: {
        totalUsers: number; // IUserData is an object
        activeUsers: number;
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