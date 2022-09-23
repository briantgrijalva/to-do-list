import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
  
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
  
export const data = {
labels: ['React', 'Development', 'CSS', 'Node js', 'Design', 'UI / UX'],
datasets: [
    {
    label: 'Skills',
    data: [10, 9, 6, 5, 3, 5],
    backgroundColor: '#07c5c544',
    borderColor: '#07c5c5',
    borderWidth: 2,
    },
],
};

export const options = {
    scales: {
        radar: {
            beginAtZero: true,
            min: 0
        }
    }
  }
  
export const RadarStats = () => {
    return <Radar data={data} options={options} />;
}