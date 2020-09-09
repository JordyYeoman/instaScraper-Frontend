import { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import StatsBar from '../components/StatsBar';
import Navbar from '../components/Navbar';
import BarChart from '../components/BarChart';
import DateDropdown from '../components/DateDropdown';
import UserDropdown from '../components/UserDropdown';

import instaData from '../../../../instagramScraper/db/imageDataScrapes.json';

// const currentUser = 'cruisin_overland';
// const currentUser = 'jordy_yeoman';

const userNames = ['jordy_yeoman', 'cruisin_overland'];

const Dashboard = () => {
  const [currentUser, SetCurrentUser] = useState('cruisin_overland');

  let Data = instaData[0];

  // Grab data & parse it into individual users
  const filteredData = Data.filter(obj => {
    return obj.userName === `${currentUser}`;
  });

  // Grab all of the scraped dates and place into an array to be mapped over
  let scrapeDatesIndex = 1;
  const dataLength = instaData.length / 2;
  const scrapeDates = [];

  // Using a for-loop instead of filter so we only grab the exact index we need,
  // instead of potentially iterating over thousand's of items
  for (let i = 0; i < dataLength; i++) {
    scrapeDates.push(instaData[scrapeDatesIndex]);
    scrapeDatesIndex += 2;
  }

  function userHandle(el) {
    console.log(`Setting current user: ${el}`);
    SetCurrentUser(el);
  }

  return (
    <div>
      <Navbar />
      <StatsBar />
      <div className="flex items-center justify-between ">
        <div className="p-2 ml-4 rounded-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
          <h2>User: {currentUser}</h2>
        </div>
        <div>
          <UserDropdown
            dates={userNames}
            name="Users"
            userHandle={userHandle}
          />
          <DateDropdown dates={scrapeDates} name="Dates" />.
        </div>
      </div>
      <div className="flex flex-wrap min-h-full sm:h-64 lg:h-auto mb-8">
        <LineChart data={filteredData} />
        <BarChart data={filteredData} />
      </div>
      <div className="rounded h-full flex justify-center items-center">
        <div className="rounded bg-white shadow-md h-48 w-48 p-6 flex flex-col justify-around">
          <div>
            <p className="text-base text-gray-600">Revenue</p>
          </div>
          <div>
            <p className="text-2xl text-gray-700 font-bold">$56,734</p>
          </div>
          <div className="text-sm">
            <p className="text-green-500 mb-1 flex item-center">
              <i className="material-icons">^</i> 5.77%
            </p>
            <p className="text-gray-600">Since last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard.getInitialProps = async () => {
//   const response = await fetch('../../../db/imageDataScrapes.json');
//   const instagramData = await response.json();
//   return { instagramData: instagramData };
// };

export default Dashboard;
