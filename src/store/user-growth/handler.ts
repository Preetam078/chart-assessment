import { StateCreator } from "zustand";
import { userGrowthConstant, userGrowthVariant } from "../../constants/filter-constants";
import { userGrowthHelper } from "./helper";

export const HANDLER = (set:ReturnType<StateCreator<any>>) => ({
    getUserGrowthData: (time:string = userGrowthConstant.ALL, userType:string = userGrowthVariant.ALL)  => {
        const response = userGrowthHelper.getFilteredData(time, userType)
        set({
            users:{
                totalUsers: response.totalUsers,
                activeUsers: response.activeUsers
            },
        })
    }
})