import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { Box } from '@mui/material';

interface ChartData {
    series: {
        data: { x: number; y: number }[];
    }[];
    options: ApexOptions
}

interface MultiplierValueType {
    multiplierValue: number;
}


function MyComponent(props: MultiplierValueType) {
    const [chartData, setChartData] = useState<ChartData>({
        options: {
            xaxis: {
                categories: [],
            },
        },
        series: [
            {
                data: [], // Empty data array to start with
            },
        ],
    });

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (props.multiplierValue){
            const intervalId = setInterval(() => {
                setCurrentValue((prevValue) => {
                    const newValue = prevValue + 1;
                    if (newValue >= props.multiplierValue) {
                        clearInterval(intervalId); // Stop the interval if the current value exceeds 5
                    }
                    return newValue;
                });
            }, 500); // 3000 milliseconds = 3 seconds
            return () => clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        const newData: ChartData = {
            options: {
                chart: {
                    id: 'realtime',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000,
                        },
                    },
                    toolbar: {
                        show: false,
                    },
                },

                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                stroke: {
                    colors: ['#ee4677'],
                },
                grid: {
                    show: false,
                },
                xaxis: {
                    categories: Array.from({ length: currentValue + 1 }, (_, i) => i.toString()), // Generate categories from 0 to currentValue
                    labels: {   
                        show: true, // Show the labels on the x-axis
                    },
                },
            },
            series: [
                {
                    data: Array.from({ length: currentValue + 1 }, (_, i) => ({ x: i, y: Math.random() })), // Generate data in the format { x: number, y: number }
                },
            ],
        };

        setChartData(newData);
    }, [currentValue]);

    return (
        <div>
            <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
    );
}

export default MyComponent;