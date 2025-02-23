import React, { useEffect } from "react";
import MetricCard from "../metric-card";
import styles from "./styles.module.css";
import useMetricCardStore from "../../store/metric-card";
import { metricCardConfig } from "./helper";
import MetricCardV2 from "../metric-card-v2";

export default function CardContainer() {
    const { getMetricCardData, totalUser, activeUser, topArtist, revenue, totalStream } = useMetricCardStore();

    useEffect(() => {
        getMetricCardData();
    }, []);

    const data = metricCardConfig(totalUser, topArtist, revenue, activeUser, totalStream);
    const { metricCardData = [], metricCardDataV2 =[] } = data;

    return (
        <React.Fragment>
            <div className={styles.upperContainer}>
                {metricCardData.map((item, index) => (
                    <MetricCard
                        key={index}
                        value={item.value}
                        label={item.label}
                        Icon={item.Icon}
                    />
                ))}
            </div>
            <div className={styles.lowerContainer}>
                {
                    metricCardDataV2 && metricCardDataV2.map((item, index) => (
                        <MetricCardV2
                            key={index}
                            value1={item.value1}
                            value2={item.value2}
                            label1={item.label1}
                            label2={item.label2}
                            Icon={item.Icon}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    );
}
