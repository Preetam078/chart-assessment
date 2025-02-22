import React, { useEffect } from "react";
import MetricCard from "../metric-card";
import styles from "./styles.module.css";
import RevenueCard from "../revenue-card";
import useMetricCardStore from "../../store/metric-card";

export default function CardContainer() {

    const { getMetricCardData, totalUser,activeUser,topArtist,revenue,totalStream} = useMetricCardStore();
    console.log("getting users......", totalUser,activeUser,topArtist,revenue,totalStream)
    useEffect(() => {
        getMetricCardData();
    },[])

    return (
        <React.Fragment>
            <div className={styles.upperContainer}>
                <MetricCard />
                <MetricCard />
                <MetricCard />
            </div>
            <RevenueCard />
        </React.Fragment>
    )
}