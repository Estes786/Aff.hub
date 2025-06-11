import React, { useState } from 'react';
import { Plus, Play, Pause, Edit, Trash2, Target } from 'lucide-react';

interface CampaignsProps {
  darkMode: boolean;
}

const Campaigns: React.FC<CampaignsProps> = ({ darkMode }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: 'Premium Tech Bundle Q1',
      status: 'active',
      budget: '$5,000',
      spent: '$3,240',
      clicks: 12470,
      conversions: 298,
      revenue: '$8,940',
      roi: '79%',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
    },
    {
      id: 2,
      name: 'Fashion Week Collection',
      status: 'active',
      budget: '$3,000',
      spent: '$2,100',
      clicks: 8920,
      conversions: 189,
      revenue: '$5,670',
      roi: '170%',
      startDate: '2024-02-01',
      endDate: '2024-02-29',
    },
    {
      id: 3,
      name: 'Health & Wellness Series',
      status: 'paused',
      budget: '$2,500',
      spent: '$1,800',
      clicks: 6340,
      conversions: 127,
      revenue: '$3,810',
      roi: '112%',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Campaign Management
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          <span>New Campaign</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Active Campaigns
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                12
              </p>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Budget
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                $45,000
              </p>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Avg. ROI
              </p>
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                156%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          All Campaigns
        </h3>
        
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className={`p-4 border rounded-lg ${
              darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
            } transition-colors`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {campaign.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-sm">
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Budget</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.budget}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Spent</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.spent}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Clicks</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.clicks.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Conversions</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.conversions}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue</p>
                      <p className={`font-medium text-green-600`}>
                        {campaign.revenue}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ROI</p>
                      <p className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        {campaign.roi}
                      </p>
                    </div>
                    <div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Period</p>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {campaign.startDate} - {campaign.endDate}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button className={`p-2 rounded-lg ${
                    campaign.status === 'active' 
                      ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  } transition-colors`}>
                    {campaign.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl max-w-lg w-full mx-4`}>
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Create New Campaign
            </h2>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Campaign Name
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter campaign name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Budget
                  </label>
                  <input
                    type="number"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="5000"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Target Audience
                  </label>
                  <select className={`w-full px-3 py-2 border rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}>
                    <option>All Users</option>
                    <option>Tech Enthusiasts</option>
                    <option>Fashion Lovers</option>
                    <option>Health Conscious</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Start Date
                  </label>
                  <input
                    type="date"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    End Date
                  </label>
                  <input
                    type="date"
                    className={`w-full px-3 py-2 border rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className={`flex-1 px-4 py-2 border rounded-lg ${
                  darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                } transition-colors`}
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;