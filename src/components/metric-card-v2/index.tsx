import React, { useState } from 'react';
import Select from 'react-select';
import styles from "./styles.module.css";
import { formatNumber } from "../../config/format-number";
import { currencyOptions, currencySymbols } from './helper';

interface MetricCardV2Props {
    value1: string | number;
    value2: string | number;
    label1: string;
    label2: string;
    Icon: React.ComponentType<any>;
    isRevenue?: boolean;
    heading: string;
}

const MetricCardV2: React.FC<MetricCardV2Props> = ({
    value1,
    value2,
    label1,
    label2,
    Icon,
    heading,
    isRevenue
}) => {
    const [currency, setCurrency] = useState(currencyOptions[0]); // Default to USD

    // Convert value based on selected currency
    const convertValue = (value: string | number) => {
        if (!isRevenue) return formatNumber(value);
        
        const convertedValue = Number(value) * currency.rate;
        return `${currencySymbols[currency.value]}${formatNumber(convertedValue)}`;
    };

    return (
        <div className={styles.container}>
            <div>   
                <h2>{heading}</h2>
                <Icon size={90} />
            </div>

            {/* Currency selector - only shown if isRevenue is true */}

            <div>
            {isRevenue && (
                <Select
                    options={currencyOptions}
                    value={currency}
                    onChange={(selected) => selected && setCurrency(selected)}
                    className={styles.currencySelect}
                />
            )}
                <div className={styles.containerInfo}>
                    <span className={styles.label}>{convertValue(value1)}</span>
                    <span className={styles.number}>{label1}</span>
                </div>
                <div className={styles.containerInfo}>
                    <span className={styles.label}>{convertValue(value2)}</span>
                    <span className={styles.number}>{label2}</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MetricCardV2);
