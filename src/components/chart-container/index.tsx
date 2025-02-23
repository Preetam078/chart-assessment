import React, { Suspense, lazy } from "react";
import styles from "./styles.module.css";

// Lazy load the components
const UserChart = lazy(() => import("../user-chart"));
const RevenueChart = lazy(() => import("../revenue-chart"));
const TopStreamChart = lazy(() => import("../top-stream-chart"));
const RecentStreamsTable = lazy(() => import("../recent-stream"));

export default function ChartContainer() {
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading charts...</div>}>
                <div className={styles.upperContainer}>
                    <UserChart />
                    <RevenueChart />
                </div>
            </Suspense>

            <Suspense fallback={<div>Loading stream data...</div>}>
                <div className={styles.lowerContainer}>
                    <TopStreamChart />
                    <RecentStreamsTable />
                </div>
            </Suspense>
        </React.Fragment>
    );
}
