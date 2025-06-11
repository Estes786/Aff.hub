import React, { useState } from 'react';
import { Plus, Link, Eye, Copy, Edit, Trash2, ExternalLink } from 'lucide-react';

interface LinkManagerProps {
  darkMode: boolean;
}

const LinkManager: React.FC<LinkManagerProps> = ({ darkMode }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const links = [
    {
      id: 1,
      title: 'Premium Tech Bundle',
      url: 'https://affihub.com/tech-bundle',
      shortUrl: 'aff.hub/tb2024',
      clicks: 1247,
      conversions: 89,
      revenue: '$2,340',
      status: 'active',
      created: '2024-01-15',
    },
    {
      id: 2,
      title: 'Fashion Week Collection',
      url: 'https://affihub.com/fashion-week',
      shortUrl: 'aff.hub/fw2024',
      clicks: 892,
      conversions: 67,
      revenue: '$1,890',
      status: 'active',
      created: '2024-01-12',
    },
    {
      id: 3,
      title: 'Health & Wellness Kit',
      url: 'https://affihub.com/health-kit',
      shortUrl: 'aff.hub/hw2024',
      clicks: 634,
      conversions: 42,
      revenue: '$1,260',
      status: 'paused',
      created: '2024-01-10',
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You would typically show a toast notification here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Link Manager
        </h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          <span>Create Link</span>
        </button>
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Campaign
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Short URL
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Clicks
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Conversions
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Revenue
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {links.map((link) => (
                <tr key={link.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors`}>
                  <td className="py-4 px-4">
                    <div>
                      <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {link.title}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Created: {link.created}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {link.shortUrl}
                      </span>
                      <button
                        onClick={() => copyToClipboard(link.shortUrl)}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                  <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {link.clicks.toLocaleString()}
                  </td>
                  <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {link.conversions}
                  </td>
                  <td className={`py-4 px-4 font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {link.revenue}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      link.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {link.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className={`p-1 rounded hover:bg-red-100 text-red-600 transition-colors`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl max-w-md w-full mx-4`}>
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Create New Link
            </h2>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Campaign Title
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter campaign title"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Destination URL
                </label>
                <input
                  type="url"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="https://example.com/product"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Custom Alias (Optional)
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="custom-alias"
                />
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
                Create Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkManager;