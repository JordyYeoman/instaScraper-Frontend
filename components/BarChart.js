import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = props => {
  const [yLabels, setYLabels] = useState([]);
  const [xLabels, setXLabels] = useState([]);

  // Loop over data and extract the time of day and
  // calculate average likes for each time interval
  useEffect(() => {
    const yData = [
      {
        timeOfDay: 'Morning',
        tally: 0,
        likes: 0,
        average: 0,
      },
      {
        timeOfDay: 'LateMorning',
        tally: 0,
        likes: 0,
        average: 0,
      },
      {
        timeOfDay: 'Arvo',
        tally: 0,
        likes: 0,
        average: 0,
      },
      {
        timeOfDay: 'LateArvo',
        tally: 0,
        likes: 0,
        average: 0,
      },
    ];

    async function getData() {
      const data = props.data[0];
      await data.forEach(element => {
        if (element.imgPostTime.y.daySegment === 1) {
          yData[0].tally += 1;
          yData[0].likes += element.imgLikes;
        } else if (element.imgPostTime.y.daySegment === 2) {
          yData[1].tally += 1;
          yData[1].likes += element.imgLikes;
        } else if (element.imgPostTime.y.daySegment === 3) {
          yData[2].tally += 1;
          yData[2].likes += element.imgLikes;
        } else if (element.imgPostTime.y.daySegment === 4) {
          yData[3].tally += 1;
          yData[3].likes += element.imgLikes;
        }
      });
      let y = [];
      await yData.forEach((el, index) => {
        let x = Math.round(el.likes / el.tally);
        yData[index].average = x;
        y.push(x);
      });
      setYLabels(y);
    }
    getData();
  }, []);

  const data = {
    labels: ['12AM - 9AM', '9AM - 12PM', '12PM - 8PM', '8PM - 12AM'],
    datasets: [
      {
        label: 'Time of Day ~ Average Likes',
        backgroundColor: 'rgba(25, 181, 254, 0.2)',
        borderColor: 'rgba(25, 181, 254, 0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(25, 181, 254, 0.4)',
        hoverBorderColor: 'rgba(25, 181, 254, 1)',
        data: yLabels,
      },
    ],
  };
  return (
    <div className="min-h-full w-full md:w-1/2 p-4">
      <div className="p-4 shadow rounded-lg bg-white">
        <Bar
          data={data}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
};
export default BarChart;
