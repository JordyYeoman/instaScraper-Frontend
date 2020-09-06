import LineChart from '../components/LineChart';
import StatsBar from '../components/StatsBar';
import Navbar from '../components/Navbar';
import BarChart from '../components/BarChart';

import instaData from '../../instaData.json';

const Dashboard = () => {
  console.log(instaData);
  return (
    <div>
      <Navbar />
      <StatsBar />
      <div className="flex flex-wrap min-h-full sm:h-64 lg:h-auto mb-8">
        <LineChart data={instaData} />
        <BarChart data={instaData} />
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
