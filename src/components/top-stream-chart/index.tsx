import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { topArtistFilter, topArtistFilterCount} from '../../constants/filter-constants';
import {  getBarChartConfig, selectorConfig } from './helper';
import styles from './styles.module.css';
import useTopStreamStore from '../../store/most-streamed-song';
import Select from 'react-select';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TopArtistChart: React.FC = () => {
    const { data, getMostStreamedSongData } = useTopStreamStore();
    const [currentFilter, setCurrentFilter] = useState({days: topArtistFilter.THIRTY_DAYS, topN: topArtistFilterCount.FIVE});

    console.log(currentFilter)

    useEffect(() => {
        try {
            getMostStreamedSongData(currentFilter.days, currentFilter.topN);
        } catch (error) {
            console.error('Error fetching user growth data:', error);
        }
    }, [getMostStreamedSongData, currentFilter]);

    const chartData = getBarChartConfig(data, currentFilter.topN);
    const handleCountChange = (selectedOption: any) => {
        const { value = "" } = (selectedOption || {})
        setCurrentFilter(prev => ({
            ...prev,
            topN: value
        }))
    };

     const handleDaysChange = (selectedOption: any) => {
        const { value = "" } = (selectedOption || {})
        setCurrentFilter(prev => ({
            ...prev,
            days: value
        }))
    };

    return (
        <div className={styles.container}>
            <h3>Top Artists</h3>
            <div className={styles.selector__container}>
                {
                    selectorConfig.map((config, index) => (
                        <Select
                            key={index}
                            options={config.selectorOption}
                            defaultValue={config.selectorOption[0]}
                            onChange={config.type === "days" ? handleDaysChange : handleCountChange}
                        />
                    ))
                }
            </div>
            <Bar data={chartData.data} options={chartData.options} />
        </div>
    );
};

export default React.memo(TopArtistChart);