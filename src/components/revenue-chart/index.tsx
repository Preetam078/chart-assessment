import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import useRevenueStore from '../../store/revenue';
import { revenueFilter, revenueSubFilter } from '../../constants/filter-constants';
import { getChartConfig, selectOptions } from './helper';
import Select from 'react-select';
import styles from './styles.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SelectOption {
    value: string;
    label: string;
}

const RevenueChart: React.FC = () => {
    const { advertisements = 0, subscriptions = 0, getRevenueData } = useRevenueStore();

    const [currentFilter, setCurrentFilter] = useState({
        time: revenueFilter.ALL,
        period: ""
    });

    useEffect(() => {
        try {
            getRevenueData(currentFilter.time, currentFilter.period);
        } catch (error) {
            console.error('Error fetching revenue data:', error);
        }
    }, [getRevenueData, currentFilter.time, currentFilter.period]);

    const getDefaultPeriod = (timeFilter: string) => {
        switch (timeFilter) {
            case revenueFilter.MONTHLY:
                return revenueSubFilter.JANUARY;
            case revenueFilter.QUARTER:
                return revenueSubFilter.FIRST_QUARTER;
            case revenueFilter.HALF:
                return revenueSubFilter.FIRST_HALF;
            default:
                return "";
        }
    };

    const handleTimeChange = useCallback((selectedOption: SelectOption | null) => {
        if (selectedOption) {
            setCurrentFilter(prev => ({
                ...prev,
                time: selectedOption.value,
                period: getDefaultPeriod(selectedOption.value)
            }));
        }
    }, []);

    const handlePeriodChange = useCallback((selectedOption: SelectOption | null) => {
        if (selectedOption) {
            setCurrentFilter(prev => ({
                ...prev,
                period: selectedOption.value
            }));
        }
    }, []);

    const chartData = useMemo(() => 
        getChartConfig({ advertisements, subscriptions }), 
        [advertisements, subscriptions]
    );

    const renderSelects = useMemo(() => {
        return selectOptions.map((currentOption) => {
            const { type = "", selectOptions = [] } = currentOption;
            
            // Show period selector only for monthly view
            if (type === "period" && currentFilter.time !== revenueFilter.MONTHLY) {
                return null;
            }
            
            // Show quarter selector only for quarterly view
            if (type === "quarter" && currentFilter.time !== revenueFilter.QUARTER) {
                return null;
            }
            
            // Show half selector only for half yearly view
            if (type === "half" && currentFilter.time !== revenueFilter.HALF) {
                return null;
            }

            const value = selectOptions.find(option => 
                option.value === (type === "time" ? currentFilter.time : currentFilter.period)
            );
            
            return (
                <Select
                    options={selectOptions}
                    value={value || selectOptions[0]}
                    isSearchable={false}
                    onChange={type === "time" ? handleTimeChange : handlePeriodChange}
                    key={type}
                />
            );
        });
    }, [currentFilter.time, currentFilter.period, handleTimeChange, handlePeriodChange]);

    return (
        <div className={styles.container}>
            <div className={styles.selector__container}>
                {renderSelects}
            </div>
            <Pie data={chartData.data} options={chartData.options} />
        </div>
    );
};

export default React.memo(RevenueChart);