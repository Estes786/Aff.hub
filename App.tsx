import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LinkManager from './components/LinkManager';
import Analytics from './components/Analytics';
import Campaigns from './components/Campaigns';
import Revenue from './components/Revenue';
import AIInsights from './components/AIInsights';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard darkMode={darkMode} />;
      case 'links':
        return <LinkManager darkMode={darkMode} />;
      case 'analytics':
        return <Analytics darkMode={darkMode} />;
      case 'campaigns':
        return <Campaigns darkMode={darkMode} />;
      case 'revenue':
        return <Revenue darkMode={darkMode} />;
      case 'ai-insights':
        return <AIInsights darkMode={darkMode} />;
      case 'settings':
        return <Settings darkMode={darkMode} />;
      default:
        return <Dashboard darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;