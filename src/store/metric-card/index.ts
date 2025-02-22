import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INITIAL_STATE as MetricInitialState } from "./state";
import { HANDLER as MetricCardHandler } from "./handler";
import { IMetricCardStore } from "./types";


const useMetricCardStore = create<IMetricCardStore>()(
  devtools(
    (set) => ({
      ...MetricInitialState,
      ...MetricCardHandler(set),
    }),
    { name: "MetricCardStore", serialize: true } // Ensure Redux DevTools recognizes it
  )
);

export default useMetricCardStore;
