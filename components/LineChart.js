import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = props => {
  const [yLabels, setYLabels] = useState([]);
  const [xLabels, setXLabels] = useState([]);

  useEffect(() => {
    async function getData() {
      let Data = props.data[0];
      let instaLikes = [];
      let postTime = [];
      Data.forEach(element => {
        postTime.push(element.imgPostTime.t);
        if (element.imgLikes == null) {
          instaLikes.push(0);
        } else {
          instaLikes.push(element.imgLikes);
        }
      });
      setXLabels(postTime);
      setYLabels(instaLikes);
    }
    getData();
  }, []);

  const data = {
    labels: xLabels,
    datasets: [
      {
        label: 'Likes Vs Time of Day',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yLabels,
      },
    ],
  };

  return (
    <div className="min-h-full w-full md:w-1/2 p-4">
      <div className="p-4 shadow rounded-lg bg-white">
        <Line
          data={data}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
