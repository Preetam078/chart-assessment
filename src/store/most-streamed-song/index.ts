import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INITIAL_STATE as topArtistInitialState } from "./state";
import { HANDLER as topArtistHandler } from "./handler";
import { IMostStreamStore } from "./types";

const useTopStreamStore = create<IMostStreamStore>()(
  devtools(
    (set) => ({
      ...topArtistInitialState,
      ...topArtistHandler(set),
    }),
    { name: "TopArtistStore", serialize: true } // Ensure Redux DevTools recognizes it
  )
);

export default useTopStreamStore;