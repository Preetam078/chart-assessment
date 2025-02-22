import { StateCreator } from "zustand";
import { IMetricCard } from "./types";
import { handlerConfig } from "./helper";

export const HANDLER = (set:ReturnType<StateCreator<any>>) => ({
    getMetricCardData: () => {
        const response:IMetricCard = handlerConfig.metricCardDataHelper();
        set(response)
    }
})