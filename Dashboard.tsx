import React from 'react';
import { TrendingUp, Users, Link, DollarSign, Eye, BarChart3 } from 'lucide-react';
import StatsCard from './StatsCard';
import RevenueChart from './RevenueChart';
import TopPerformers from './TopPerformers';

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,892',
      change: '+12.5%',
      icon: DollarSign,
      color: 'green',
    },
    {
      title: 'Active Links',
      value: '1,247',
      change: '+8.2%',
      icon: Link,
      color: 'blue',
    },
    {
      title: 'Click Rate',
      value: '24.8%',
      change: '+3.1%',
      icon: Eye,
      color: 'purple',
    },
    {
      title: 'Conversions',
      value: '892',
      change: '+15.7%',
      icon: TrendingUp,
      color: 'orange',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Dashboard Overview
        </h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
            Generate Report
          </button>
          <button className={`px-4 py-2 border rounded-lg ${
            darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          } transition-all duration-200`}>
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} darkMode={darkMode} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart darkMode={darkMode} />
        </div>
        <div>
          <TopPerformers darkMode={darkMode} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: 'New affiliate link created', time: '2 minutes ago', status: 'success' },
              { action: 'Campaign optimization completed', time: '15 minutes ago', status: 'info' },
              { action: 'Revenue milestone reached', time: '1 hour ago', status: 'success' },
              { action: 'Link performance alert', time: '2 hours ago', status: 'warning' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {activity.action}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            AI Recommendations
          </h3>
          <div className="space-y-4">
            {[
              {
                title: 'Optimize Campaign #1247',
                description: 'Increase budget by 20% for 15% more conversions',
                impact: 'High Impact',
              },
              {
                title: 'New Audience Segment',
                description: 'Target users aged 25-34 for better ROI',
                impact: 'Medium Impact',
              },
              {
                title: 'Link Placement',
                description: 'Move CTA above the fold for 8% better CTR',
                impact: 'Low Impact',
              },
            ].map((rec, index) => (
              <div key={index} className={`p-3 border rounded-lg ${
                darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
              } transition-colors cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {rec.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    rec.impact === 'High Impact' ? 'bg-green-100 text-green-800' :
                    rec.impact === 'Medium Impact' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {rec.impact}
                  </span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;