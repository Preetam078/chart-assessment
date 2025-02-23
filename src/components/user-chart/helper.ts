import { ChartData, ChartOptions } from "chart.js";
import { userGrowthConstant, userGrowthVariant } from "../../constants/filter-constants";

interface UserData {
    activeUsers: Record<string, number>;
    totalUsers: Record<string, number>;
}

export const getLineChartConfig = (users: UserData = { activeUsers: {}, totalUsers: {} }) => {
    const { activeUsers = {}, totalUsers = {} } = users;
    // Extracting labels and values

    const labels = Object.keys(activeUsers).length > 0 ? Object.keys(activeUsers) :  Object.keys(totalUsers);
    const activeUsersData = Object.values(activeUsers);
    const usersData = Object.values(totalUsers);
    // Define the type for the chart data
    const data: ChartData<"line",(unknown[])> = {
        labels,
        datasets: [
            {
                label: "Active Users",
                data: activeUsersData,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: true,
                pointRadius: 4,
            },
            {
                label: "Total Users",
                data: usersData,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
                fill: true,
                pointRadius: 4,
            }
        ],
    };

    // Define the type for the chart options
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    return {
        data,
        options
    }
}

export const timeOption = [
    { value: userGrowthConstant.ALL, label: 'Yearly' },
    { value: userGrowthConstant.HALF, label: '6 month' },
    { value: userGrowthConstant.QUARTER, label: 'quartly' }
];


export const userOption = [
    { value: userGrowthVariant.ALL, label: 'Platform Users' },
    { value: userGrowthVariant.ACTIVE_USER, label: 'Active Users' },
    { value: userGrowthVariant.TOTAL_USER, label: 'Total Users' }
];

export const selectOptions = [
    {
        type: "time",
        selectOptions: timeOption,
    },
    {
        type: "user",
        selectOptions: userOption,
    },
]