import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 50
  },

  Moderate: {
    min: 50,
    max: 100
  },

  Expensive: {
    min: 100,
    max: 10000000
  }
};

const BookingsChart = (props) => {
  const chartData = {
    labels: [],
    datasets: [{
      label: 'Number of Bookings',
      data: [],
      backgroundColor: 'rgba(220,220,220,0.5)',
      borderColor: 'rgba(220,220,220,0.8)',
      borderWidth: 1
    }]
  };

  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price >= BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);

    chartData.labels.push(bucket);
    chartData.datasets[0].data.push(filteredBookingsCount);
  }

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Number of bookings: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BookingsChart;
