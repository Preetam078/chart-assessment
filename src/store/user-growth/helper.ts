import { userGrowthConstant, userGrowthVariant } from "../../constants/filter-constants";
import { users, activeUsers } from "../../data";

export const userGrowthHelper = {
    getFilteredData: (time = userGrowthConstant.ALL, userType = userGrowthVariant.ALL) => {

       const newUserData = {
        totalUsers: {},
        activeUsers: {}
       };

       let includedMonths = [];

       switch(time) {
        case userGrowthConstant.QUARTER:
            includedMonths = [...Object.keys(users).slice(-3)];
            break;
        case userGrowthConstant.HALF:
            includedMonths = [...Object.keys(users).slice(-6)];
            break;
        default:
            includedMonths = [...Object.keys(users)];
            break;
       }
       
       switch(userType) {
        case userGrowthVariant.ACTIVE_USER:
            includedMonths.forEach((currentMonth) => {;
                (newUserData.activeUsers as {[key: string]: number})[currentMonth] = (activeUsers as {[key: string]: number})[currentMonth];
            });
            break;
        case userGrowthVariant.TOTAL_USER:
            includedMonths.forEach((currentMonth) => {
                (newUserData.totalUsers as { [key: string]: number })[currentMonth] = (users as { [key: string]: number })[currentMonth];
            });
            break;
        default:
            includedMonths.forEach((currentMonth) => {
                (newUserData.activeUsers as {[key: string]: number})[currentMonth] = (activeUsers as {[key: string]: number})[currentMonth];
                (newUserData.totalUsers as { [key: string]: number })[currentMonth] = (users as { [key: string]: number })[currentMonth];
            });
       }

       return newUserData;
    }
};
