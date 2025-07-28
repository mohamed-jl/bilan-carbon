'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

type DonutChartProps = {
  fractions: number[];
  labels?: string[];
  colors?: string[];
};

const DonutChart: React.FC<DonutChartProps> = ({
  fractions,
  labels = ['Tunis', 'Sfax', 'Sousse'],
  colors = ['#4ade80', '#60a5fa', '#facc15'], // green, blue, yellow
}) => {
  const total = fractions.reduce((sum, val) => sum + val, 0);

  const data: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data: fractions,
        backgroundColor: colors,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex] as number;
            const percentage = ((currentValue / total) * 100).toFixed(1);
            const label = data.labels?.[tooltipItem.dataIndex] || '';
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
    cutout: '70%', // makes it a donut
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
