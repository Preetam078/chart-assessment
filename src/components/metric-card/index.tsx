import React from "react";
import styles from "./styles.module.css";

interface MetricCardProps {
    value: number;
    label: string;
    Icon: React.ElementType;
}

export default function MetricCard({ value, label, Icon }: MetricCardProps) {
    return (
        <div className={styles.container}>
            <Icon size={50} />
            <div className={styles.containerInfo}>
                <span className={styles.label}>{label}</span>
                <span className={styles.number}>{value}</span>
            </div>
        </div>
    );
}
