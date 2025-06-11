import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

interface TopPerformersProps {
  darkMode: boolean;
}

const TopPerformers: React.FC<TopPerformersProps> = ({ darkMode }) => {
  const performers = [
    {
      name: 'Tech Bundle Campaign',
      revenue: '$8,420',
      conversion: '24.5%',
      trend: 'up',
    },
    {
      name: 'Fashion Week Promo',
      revenue: '$6,290',
      conversion: '18.3%',
      trend: 'up',
    },
    {
      name: 'Health & Wellness',
      revenue: '$4,150',
      conversion: '15.7%',
      trend: 'down',
    },
    {
      name: 'Digital Tools Suite',
      revenue: '$3,890',
      conversion: '12.4%',
      trend: 'up',
    },
  ];

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Top Performers
        </h3>
        <Trophy className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      
      <div className="space-y-4">
        {performers.map((performer, index) => (
          <div key={index} className={`p-3 border rounded-lg ${
            darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
          } transition-colors`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {performer.name}
                </h4>
                <div className="flex items-center space-x-4 mt-1">
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Revenue: {performer.revenue}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    CVR: {performer.conversion}
                  </span>
                </div>
              </div>
              <div className={`p-1 rounded ${
                performer.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                <TrendingUp className={`h-3 w-3 ${
                  performer.trend === 'down' ? 'rotate-180' : ''
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;