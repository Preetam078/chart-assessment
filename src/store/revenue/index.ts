import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INITIAL_STATE as revenueInitialState } from "./state";
import { HANDLER as revenueHandler } from "./handler";
import { IRevenueStore } from "./types";


const useRevenueStore = create<IRevenueStore>()(
  devtools(
    (set) => ({
      ...revenueInitialState,
      ...revenueHandler(set),
    }),
    { name: "RevenueStore", serialize: true } // Ensure Redux DevTools recognizes it
  )
);

export default useRevenueStore;
