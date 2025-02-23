import { revenueFilter, revenueSubFilter } from '../../constants/filter-constants';

interface RevenueData {
    advertisements: number;
    subscriptions: number;
}

export const getChartConfig = (data: RevenueData) => {
    const chartData = {
        labels: ['Advertisements', 'Subscriptions'],
        datasets: [{
            data: [data.advertisements, data.subscriptions],
            backgroundColor: [
                '#36A2EB',  // blue for ads
                '#FF6384'   // pink for subscriptions
            ],
            borderWidth: 1
        }]
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom' as const
            }
        }
    };

    return { data: chartData, options };
};

export const selectOptions = [
    {
        type: "time",
        selectOptions: [
            { value: revenueFilter.ALL, label: "All Time" },
            { value: revenueFilter.MONTHLY, label: "Monthly" },
            { value: revenueFilter.QUARTER, label: "Quarterly" },
            { value: revenueFilter.HALF, label: "Half Yearly" }
        ]
    },
    {
        type: "period",
        selectOptions: [
            { value: "", label: "All" },
            // Monthly options
            { value: revenueSubFilter.JANUARY, label: "January" },
            { value: revenueSubFilter.FEBRUARY, label: "February" },
            { value: revenueSubFilter.MARCH, label: "March" },
            { value: revenueSubFilter.APRIL, label: "April" },
            { value: revenueSubFilter.MAY, label: "May" },
            { value: revenueSubFilter.JUNE, label: "June" },
            { value: revenueSubFilter.JULY, label: "July" },
            { value: revenueSubFilter.AUGUST, label: "August" },
            { value: revenueSubFilter.SEPTEMBER, label: "September" },
            { value: revenueSubFilter.OCTOBER, label: "October" },
            { value: revenueSubFilter.NOVEMBER, label: "November" },
            { value: revenueSubFilter.DECEMBER, label: "December" }
        ]
    },
    {
        type: "quarter",
        selectOptions: [
            { value: revenueSubFilter.FIRST_QUARTER, label: "Q1" },
            { value: revenueSubFilter.SECOND_QUARTER, label: "Q2" },
            { value: revenueSubFilter.THIRD_QUARTER, label: "Q3" },
            { value: revenueSubFilter.FOURTH_QUARTER, label: "Q4" }
        ]
    },
    {
        type: "half",
        selectOptions: [
            { value: revenueSubFilter.FIRST_HALF, label: "H1" },
            { value: revenueSubFilter.SECOND_HALF, label: "H2" }
        ]
    }
];
