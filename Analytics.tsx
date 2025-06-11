import React from 'react';
import { TrendingUp, Users, Globe, Smartphone, Monitor, Tablet } from 'lucide-react';

interface AnalyticsProps {
  darkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ darkMode }) => {
  const deviceData = [
    { device: 'Desktop', percentage: 45, icon: Monitor, color: 'bg-blue-500' },
    { device: 'Mobile', percentage: 40, icon: Smartphone, color: 'bg-green-500' },
    { device: 'Tablet', percentage: 15, icon: Tablet, color: 'bg-purple-500' },
  ];

  const geoData = [
    { country: 'United States', clicks: 1247, percentage: 35 },
    { country: 'United Kingdom', clicks: 892, percentage: 25 },
    { country: 'Canada', clicks: 634, percentage: 18 },
    { country: 'Australia', clicks: 423, percentage: 12 },
    { country: 'Germany', clicks: 356, percentage: 10 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Analytics Overview
        </h1>
        <div className="flex space-x-3">
          <select className={`px-4 py-2 border rounded-lg ${
            darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
          }`}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Device Analytics
          </h3>
          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${device.color}`}>
                  <device.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {device.device}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className={`${device.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Geographic Distribution
          </h3>
          <div className="space-y-3">
            {geoData.map((geo, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {geo.country}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {geo.clicks} clicks
                  </span>
                  <div className="w-16 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${geo.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Click Timeline
          </h3>
          <div className="space-y-3">
            {[
              { time: '00:00', clicks: 45 },
              { time: '06:00', clicks: 120 },
              { time: '12:00', clicks: 280 },
              { time: '18:00', clicks: 190 },
            ].map((time, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {time.time}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(time.clicks / 280) * 100}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {time.clicks}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Conversion Funnel
          </h3>
          <div className="space-y-4">
            {[
              { stage: 'Impressions', count: 10000, percentage: 100 },
              { stage: 'Clicks', count: 1500, percentage: 15 },
              { stage: 'Visits', count: 1200, percentage: 12 },
              { stage: 'Conversions', count: 180, percentage: 1.8 },
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stage.stage}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stage.count.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Performance Metrics
          </h3>
          <div className="space-y-4">
            {[
              { metric: 'CTR', value: '2.4%', change: '+0.3%', trend: 'up' },
              { metric: 'CVR', value: '12.8%', change: '+1.2%', trend: 'up' },
              { metric: 'AOV', value: '$89.40', change: '-$2.10', trend: 'down' },
              { metric: 'ROAS', value: '4.2x', change: '+0.5x', trend: 'up' },
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {metric.metric}
                </span>
                <div className="text-right">
                  <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {metric.value}
                  </div>
                  <div className={`text-xs ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;