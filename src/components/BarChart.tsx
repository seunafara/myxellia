import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep']
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(() => 100),
        backgroundColor: 'rgb(69, 69, 254)',
        stack: 'Stack 0',
      },
      {
        label: '',
        data: labels.map(() => 200),
        backgroundColor: 'rgb(18, 183, 106)',
        stack: 'Stack 1',
      },
      {
        label: '',
        data: labels.map(() => 300),
        backgroundColor: 'rgb(240, 68, 56)',
        stack: 'Stack 2',
      },
    ],
  }
  return (
    <div className='max-w-full'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart
