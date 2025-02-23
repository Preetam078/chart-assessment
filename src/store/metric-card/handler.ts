import { IMetricCard } from "./types";
import { handlerConfig } from "./helper";

export const HANDLER = (set: (state: Partial<IMetricCard>) => void) => ({
    getMetricCardData: () => {
        const response:IMetricCard = handlerConfig.metricCardDataHelper();
        set(response)
    }
})