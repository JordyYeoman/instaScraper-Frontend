import LineChart from '../components/LineChart';
import StatsBar from '../components/StatsBar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <StatsBar />
      <LineChart />
      <div class="rounded h-full flex justify-center items-center">
        <div class="rounded bg-white shadow-md h-48 w-48 p-6 flex flex-col justify-around">
          <div>
            <p class="text-base text-gray-600">Revenue</p>
          </div>
          <div>
            <p class="text-2xl text-gray-700 font-bold">$56,734</p>
          </div>
          <div class="text-sm">
            <p class="text-green-500 mb-1 flex item-center">
              <i class="material-icons">arrow_drop_up</i> 5.77%
            </p>
            <p class="text-gray-600">Since last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
