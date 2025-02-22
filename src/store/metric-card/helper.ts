import { activeUsers, revenue, topArtistByDay, totalStreams, users } from "../../data";
import { IMetricCard } from "./types";

export const handlerConfig = {
    metricCardDataHelper: (): IMetricCard => {
        const artistMap = new Map();

        // Calculate total users, active users, and total streams
        const totalUser = Object.values(users).reduce((acc, curr) => acc + curr, 0);
        const totalActiveUser = Object.values(activeUsers).reduce((acc, curr) => acc + curr, 0);
        const totalStream = Object.values(totalStreams).reduce((acc, curr) => acc + curr, 0);

        // Calculate total revenue from subscriptions & advertisements
        const totalRevenue = Object.values(revenue).reduce((acc, curr) => {
            const { subscriptions = 0, advertisements = 0 } = curr || {};
            acc.advertisements += advertisements;
            acc.subscriptions += subscriptions;
            return acc;
        }, { subscriptions: 0, advertisements: 0 });

        // Aggregate streams per artist
        Object.values(topArtistByDay).forEach(({ artist = "", streams = 0 }) => {
            artistMap.set(artist, (artistMap.get(artist) || 0) + streams);
        });

        // Find the top artist with the most streams
        const [topArtistName, topArtistStreams] = [...artistMap.entries()]
            .reduce((max, current) => (current[1] > max[1] ? current : max), ["", 0]);

        return {
            totalUser,
            activeUser: totalActiveUser,
            totalStream,
            revenue: totalRevenue,
            topArtist: { artist: topArtistName, streams: topArtistStreams }
        };
    }
};
