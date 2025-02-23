import { IUserGrowth } from "./types";

export const INITIAL_STATE:IUserGrowth = {
    users:{
        totalUsers: {} as Record<string, number>,
        activeUsers: {} as Record<string, number>
    },
    
}