'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
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
        enabled: true,
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
