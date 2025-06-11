import React from 'react';
import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';

interface RevenueProps {
  darkMode: boolean;
}

const Revenue: React.FC<RevenueProps> = ({ darkMode }) => {
  const revenueData = [
    { period: 'Today', amount: '$1,247', change: '+8.2%', trend: 'up' },
    { period: 'This Week', amount: '$8,940', change: '+12.5%', trend: 'up' },
    { period: 'This Month', amount: '$45,892', change: '+18.7%', trend: 'up' },
    { period: 'This Year', amount: '$347,250', change: '+24.3%', trend: 'up' },
  ];

  const topEarners = [
    { campaign: 'Premium Tech Bundle', revenue: '$12,340', percentage: 27 },
    { campaign: 'Fashion Week Collection', revenue: '$8,920', percentage: 19 },
    { campaign: 'Health & Wellness Kit', revenue: '$6,780', percentage: 15 },
    { campaign: 'Digital Tools Suite', revenue: '$5,430', percentage: 12 },
    { campaign: 'Home & Garden', revenue: '$4,230', percentage: 9 },
  ];

  const payouts = [
    { date: '2024-01-15', amount: '$8,240', status: 'completed' },
    { date: '2024-01-01', amount: '$7,130', status: 'completed' },
    { date: '2023-12-15', amount: '$6,890', status: 'completed' },
    { date: '2023-12-01', amount: '$5,420', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Revenue Analytics
        </h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueData.map((data, index) => (
          <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data.period}
                </p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
                  {data.amount}
                </p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {data.change}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-green-500">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Top Revenue Generators
          </h3>
          <div className="space-y-4">
            {topEarners.map((earner, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {earner.campaign}
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${earner.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className={`text-sm font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {earner.revenue}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {earner.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Payouts
          </h3>
          <div className="space-y-4">
            {payouts.map((payout, index) => (
              <div key={index} className={`p-3 border rounded-lg ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <Calendar className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {payout.amount}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {payout.date}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  payout.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {payout.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Revenue Breakdown by Month
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { month: 'Jan', revenue: 32000, growth: 12 },
            { month: 'Feb', revenue: 38000, growth: 18 },
            { month: 'Mar', revenue: 42000, growth: 11 },
            { month: 'Apr', revenue: 45000, growth: 7 },
            { month: 'May', revenue: 48000, growth: 7 },
            { month: 'Jun', revenue: 52000, growth: 8 },
          ].map((month, index) => (
            <div key={index} className={`p-4 border rounded-lg ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            } text-center`}>
              <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                {month.month}
              </p>
              <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                ${month.revenue.toLocaleString()}
              </p>
              <p className="text-xs text-green-600 mt-1">
                +{month.growth}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revenue;