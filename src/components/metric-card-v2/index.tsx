import React from 'react';
import styles from "./styles.module.css"

interface MetricCardV2Props {
    value1: string | number;
    value2: string | number;
    label1: string;
    label2: string;
    Icon: React.ComponentType<any>;
}

const MetricCardV2: React.FC<MetricCardV2Props> = ({
    value1,
    value2,
    label1,
    label2,
    Icon
}) => {
    return (
        <>
            <div className={styles.container}>
                <Icon size={90} />
                <div>
                    <div className={styles.containerInfo}>
                        <span className={styles.label}>{value1}</span>
                        <span className={styles.number}>{label1}</span>
                    </div>
                    <div className={styles.containerInfo}>
                        <span className={styles.label}>{value2}</span>
                        <span className={styles.number}>{label2}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MetricCardV2;