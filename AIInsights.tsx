import React from 'react';
import { Brain, Lightbulb, TrendingUp, AlertTriangle, Target, Zap } from 'lucide-react';

interface AIInsightsProps {
  darkMode: boolean;
}

const AIInsights: React.FC<AIInsightsProps> = ({ darkMode }) => {
  const insights = [
    {
      type: 'optimization',
      title: 'Campaign Performance Optimization',
      description: 'Your "Tech Bundle" campaign shows 23% higher engagement during evening hours. Consider increasing budget allocation between 6-10 PM.',
      impact: 'High',
      potential: '+$2,340 monthly revenue',
      icon: TrendingUp,
      color: 'green',
    },
    {
      type: 'alert',
      title: 'Link Performance Alert',
      description: 'Link "fashion-week-2024" has shown declining click-through rates over the past 7 days. Recommend A/B testing new creative assets.',
      impact: 'Medium',
      potential: 'Prevent -15% CTR decline',
      icon: AlertTriangle,
      color: 'yellow',
    },
    {
      type: 'opportunity',
      title: 'New Audience Segment Identified',
      description: 'AI detected high-converting users aged 25-34 interested in sustainable products. This segment shows 180% higher conversion rates.',
      impact: 'High',
      potential: '+$1,890 weekly revenue',
      icon: Target,
      color: 'blue',
    },
    {
      type: 'trend',
      title: 'Seasonal Trend Analysis',
      description: 'Historical data indicates 40% increase in health & wellness product interest during January. Prepare campaigns accordingly.',
      impact: 'Medium',
      potential: '+$980 seasonal boost',
      icon: Lightbulb,
      color: 'purple',
    },
  ];

  const predictions = [
    { metric: 'Revenue (Next 7 Days)', predicted: '$12,340', confidence: '92%' },
    { metric: 'Click Rate Trend', predicted: '+2.3%', confidence: '87%' },
    { metric: 'Conversion Rate', predicted: '14.2%', confidence: '89%' },
    { metric: 'Top Performing Category', predicted: 'Tech Products', confidence: '94%' },
  ];

  const recommendations = [
    {
      action: 'Increase Budget',
      campaign: 'Premium Tech Bundle',
      reason: 'ROI is 240% above average',
      expected: '+$1,200 revenue',
      urgency: 'High',
    },
    {
      action: 'Pause Campaign',
      campaign: 'Outdated Gadgets',
      reason: 'Negative ROI for 5 consecutive days',
      expected: 'Save $340 daily',
      urgency: 'High',
    },
    {
      action: 'Update Creative',
      campaign: 'Fashion Collection',
      reason: 'Creative fatigue detected',
      expected: '+8% CTR improvement',
      urgency: 'Medium',
    },
    {
      action: 'Expand Targeting',
      campaign: 'Health Products',
      reason: 'Similar audiences available',
      expected: '+$680 weekly revenue',
      urgency: 'Low',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          AI-Powered Insights
        </h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              AI Analysis Active
            </span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
            Refresh Analysis
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-200`}>
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                insight.color === 'green' ? 'bg-green-100' :
                insight.color === 'yellow' ? 'bg-yellow-100' :
                insight.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
              }`}>
                <insight.icon className={`h-6 w-6 ${
                  insight.color === 'green' ? 'text-green-600' :
                  insight.color === 'yellow' ? 'text-yellow-600' :
                  insight.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {insight.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                    insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    insight.color === 'green' ? 'text-green-600' :
                    insight.color === 'yellow' ? 'text-yellow-600' :
                    insight.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {insight.potential}
                  </span>
                  <button className={`px-3 py-1 rounded-lg text-xs ${
                    darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}>
                    Apply Suggestion
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center space-x-3 mb-6">
            <Brain className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Predictions
            </h3>
          </div>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className={`p-3 border rounded-lg ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {prediction.metric}
                    </p>
                    <p className={`text-lg font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {prediction.predicted}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Confidence
                    </p>
                    <p className={`text-sm font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      {prediction.confidence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center space-x-3 mb-6">
            <Zap className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Recommended Actions
            </h3>
          </div>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className={`p-3 border rounded-lg ${
                darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
              } transition-colors cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {rec.action}: {rec.campaign}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rec.urgency === 'High' ? 'bg-red-100 text-red-800' :
                    rec.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {rec.urgency}
                  </span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  {rec.reason}
                </p>
                <p className={`text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Expected: {rec.expected}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          AI Learning Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Data Points Analyzed
            </p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              1.2M+
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Prediction Accuracy
            </p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              89.2%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Revenue Optimization
            </p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              +24.5%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;