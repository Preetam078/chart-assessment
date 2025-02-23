import { userGrowthConstant, userGrowthVariant } from "../../constants/filter-constants";
import { userGrowthHelper } from "./helper";
import { IUserGrowthResponse, IUserGrowthState } from "./types";

export const HANDLER = (set: (state: Partial<IUserGrowthState>) => void) => ({
    getUserGrowthData: (time:string = userGrowthConstant.ALL, userType:string = userGrowthVariant.ALL)  => {
        const response = userGrowthHelper.getFilteredData(time, userType) as IUserGrowthResponse;
        set({
            users:{
                totalUsers: response.totalUsers,
                activeUsers: response.activeUsers
            },
        })
    }
})