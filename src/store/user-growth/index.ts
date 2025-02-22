import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INITIAL_STATE as UserInitialState } from "./state";
import { HANDLER as userGrowthHandler } from "./handler";
import { IUserGrowthStore } from "./types";


const useUserGrowthChartStore = create<IUserGrowthStore>()(
  devtools(
    (set) => ({
      ...UserInitialState,
      ...userGrowthHandler(set),
    }),
    { name: "UserGrowthStore", serialize: true } // Ensure Redux DevTools recognizes it
  )
);

export default useUserGrowthChartStore;
