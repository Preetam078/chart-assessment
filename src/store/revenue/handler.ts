import { revenueFilterConfig } from "./helper";
import {revenueFilter} from "../../constants/filter-constants"
import { IRevenueState } from "./types";
  
export const HANDLER = (set: (state: Partial<IRevenueState>) => void) => ({
    getRevenueData: (filter = revenueFilter.ALL, subFilter = "") => {
        const response:IRevenueState = revenueFilterConfig.getRevenueData(filter, subFilter);
        set(response)
    }
})