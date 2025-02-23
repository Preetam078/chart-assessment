import {
  revenueFilter,
  revenueSubFilter,
} from "../../constants/filter-constants";
import { revenue } from "../../data";
import { IRevenueState } from "./types";


export const revenueFilterConfig = {
  getRevenueData: (filter = revenueFilter.ALL, subFilter = "") => {
    const newRevenue: IRevenueState = {
      advertisements: 0,
      subscriptions: 0,
    };

    const getQuarterlyData = (subFilter: keyof typeof revenueSubFilter) => {
      console.log(filter, subFilter)
      const quarterMapping = {
        [revenueSubFilter.FIRST_QUARTER]: ["January", "February", "March"],
        [revenueSubFilter.SECOND_QUARTER]: ["April", "May", "June"],
        [revenueSubFilter.THIRD_QUARTER]: ["July", "August", "September"],
        [revenueSubFilter.FOURTH_QUARTER]: ["October", "November", "December"],
      };
      
      const months = quarterMapping[subFilter] || [];
      const data = { advertisements: 0, subscriptions: 0 };
      
      months.forEach((month) => {
        const revenueKey = month as keyof typeof revenue;
        if (revenue[revenueKey]) {
          data.advertisements += revenue[revenueKey].advertisements;
          data.subscriptions += revenue[revenueKey].subscriptions;
        }
      });
      
      return data;
    };

    const getMonthlyData = (subFilter: string) => {
      const month = (subFilter.charAt(0).toUpperCase() + subFilter.slice(1).toLowerCase()) as keyof typeof revenue;
      if (revenue[month]) {
        return { ...revenue[month] };
      }
      return { advertisements: 0, subscriptions: 0 };
    };

    const getHalfYearlyData = (subFilter: keyof typeof revenueSubFilter) => {
      const halfYearMapping = {
        [revenueSubFilter.FIRST_HALF]: ["January", "February", "March", "April", "May", "June"],
        [revenueSubFilter.SECOND_HALF]: ["July", "August", "September", "October", "November", "December"]
      };
      
      const months = halfYearMapping[subFilter] || [];
      const data = { advertisements: 0, subscriptions: 0 };
      
      months.forEach((month) => {
        const revenueKey = month as keyof typeof revenue;
        if (revenue[revenueKey]) {
          data.advertisements += revenue[revenueKey].advertisements;
          data.subscriptions += revenue[revenueKey].subscriptions;
        }
      });
      
      return data;
    };

    switch (filter) {
      case revenueFilter.HALF:
        return getHalfYearlyData(subFilter as keyof typeof revenueSubFilter);
      case revenueFilter.QUARTER:
        return getQuarterlyData(subFilter as keyof typeof revenueSubFilter);
      case revenueFilter.MONTHLY:
        return getMonthlyData(subFilter);
      default:
        return Object.keys(revenue).reduce((acc, month) => {
          const revenueKey = month as keyof typeof revenue;
          acc.advertisements += revenue[revenueKey].advertisements;
          acc.subscriptions += revenue[revenueKey].subscriptions;
          return acc;
        }, newRevenue);
    }
  },
};
