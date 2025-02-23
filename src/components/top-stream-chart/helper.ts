import { topArtistFilterCount } from "../../constants/filter-constants";

export const getBarChartConfig = (data: any, topN: number) => {
    const topNData = data.slice(0, topN);
    const songTitles = topNData.map((song: any) => `${song.song} by ${song.artist}`);
    const streamCounts = topNData.map((song: any) => song.streams);

    return {
        data: {
            labels: songTitles,
            datasets: [{
                label: 'Streams',
                data: streamCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: `Top ${topN} Song Streams`
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
};

export const selectOptions = [
    {
        value: topArtistFilterCount.FIVE,
        label: 'Top 5'
      },
    {
      value: topArtistFilterCount.TEN,
      label: 'Top 10'
    }
  ];

  export const daysOptions = [
    {
        value: '7',
        label: 'Last 7 Days'
    },
    {
        value: '10',
        label: 'Last 10 Days'
    },
    {
        value: '30',
        label: 'Last 30 Days'
    }
];

export const selectorConfig = [
    {
        selectorOption: daysOptions,
        type: 'days'
    },
    {
        selectorOption: selectOptions,
        type: 'count'
    }
]