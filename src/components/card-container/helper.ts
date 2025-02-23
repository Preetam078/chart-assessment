import { FaUserAlt, FaUserCheck, FaWifi } from "react-icons/fa";
import { IRevenue, ITopArtist } from "../../store/metric-card/types";
import { MdHeadsetMic } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";


export const metricCardConfig = (totalUser: number, topArtist: ITopArtist, revenue: IRevenue, activeUser: number, totalStream: number) => {
    return {
        metricCardData: [
            {
                value: totalUser,
                label: "Total Users",
                Icon: FaUserAlt
            },
            {
                value: activeUser,
                label: "Active Users",
                Icon: FaUserCheck
            },
            {
                value: totalStream,
                label: "Total Streams",
                Icon: FaWifi
            }
        ],
        metricCardDataV2: [
            {
                value1: topArtist.streams,
                label1: "Streams",
                label2: "Top Artist",
                value2: topArtist.artist,
                Icon: MdHeadsetMic
            },
            {
                value1: revenue.advertisements,
                label1: "Advertisements",
                value2: revenue.subscriptions,
                label2: "Subscriptions",
                Icon: FaMoneyBillAlt
            },
        ]
    };
};
