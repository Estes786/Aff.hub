import React from 'react';
import { BarChart3 } from 'lucide-react';

interface RevenueChartProps {
  darkMode: boolean;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ darkMode }) => {
  const data = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 28000 },
    { month: 'Jun', revenue: 32000 },
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Revenue Trends
        </h3>
        <BarChart3 className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className={`text-sm font-medium w-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {item.month}
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-3 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
              ></div>
            </div>
            <span className={`text-sm font-medium w-16 text-right ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ${item.revenue.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;