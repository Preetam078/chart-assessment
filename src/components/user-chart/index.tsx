import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
} from "chart.js";
import useUserGrowthChartStore from "../../store/user-growth";
import { getLineChartConfig, selectOptions } from "./helper";
import Select from 'react-select';
import { userGrowthConstant } from "../../constants/filter-constants";

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement);

interface SelectOption {
    value: string;
    label: string;
}

const UserChart: React.FC = () => {
    const { users, getUserGrowthData } = useUserGrowthChartStore();
    const [currentFilter, setCurrentFilter] = useState({
        time: userGrowthConstant.ALL,
        userType: userGrowthConstant.ALL
    })

    useEffect(() => {
        getUserGrowthData(currentFilter.time, currentFilter.userType);
    }, [getUserGrowthData, currentFilter]);

    const { data, options } = getLineChartConfig(users || {});

    const handleTimeChange = (selectedOption: SelectOption | null) => {
        const { value = "" } = (selectedOption || {})
        setCurrentFilter(prev => ({
            ...prev,
            time: value
        }))
    }

    const handleUserChange = (selectedOption: SelectOption | null) => {
        const { value = "" } = (selectedOption || {})
        setCurrentFilter(prev => ({
            ...prev,
            userType: value
        }))
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
            <div className={styles.selector__container}>
                {
                    selectOptions && selectOptions.map((currentOption) => {
                        const { type = "", selectOptions = []} = (currentOption || {})
                        return (
                            <Select
                                options={selectOptions}
                                defaultValue={selectOptions[0]}
                                isSearchable={false}
                                onChange={type === "time" ? handleTimeChange : handleUserChange}
                                key={type}
                            />
                        )
                    })
                }
            </div>
            <Line data={data} options={options} />
            </div>
        </React.Fragment>
    );
};

// Wrap with React.memo to optimize re-renders
export default React.memo(UserChart);
