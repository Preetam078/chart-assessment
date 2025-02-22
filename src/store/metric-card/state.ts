import { IMetricCard } from "./types";

export const INITIAL_STATE:IMetricCard = {
    totalUser: 0,
    activeUser: 0,
    totalStream: 0,
    revenue: {
        advertisements: 0,
        subscriptions: 0
    },
    topArtist: {
        artist: "",
        streams: 0
    }
}