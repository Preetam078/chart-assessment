import { topArtistFilter, topArtistFilterCount } from "../../constants/filter-constants";
import { getTopArticleData } from "./helper";
import { IMostStreamedSongState } from "./types";

export const HANDLER = (set:(state: Partial<IMostStreamedSongState>) => void) => ({
    getMostStreamedSongData: (days = topArtistFilter.THIRTY_DAYS, topN = topArtistFilterCount.FIVE) => {
        const response = getTopArticleData(days, topN);
        set({ data: response })
    }
})  