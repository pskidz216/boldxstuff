// App.jsx
import React, { useState } from 'react';
import KPIDashboard from './components/KPIDashboard';
import { extractKpiData } from './utils/excelDataProcessor';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  
  // Handle file upload
  const handleFileUpload = async (event) => {
    const files = event.target.files;
    
    if (files.length < 3) {
      setError('Please upload all three required Excel files.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Map files to their types based on file names
      const fileMap = {
        bookingsFile: null,
        openOrdersFile: null,
        revenueFile: null
      };
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        if (file.name.includes('CustomerBookings')) {
          fileMap.bookingsFile = file;
        } else if (file.name.includes('OpenOrders')) {
          fileMap.openOrdersFile = file;
        } else if (file.name.includes('Revenue')) {
          fileMap.revenueFile = file;
        }
      }
      
      // Check if all required files are present
      if (!fileMap.bookingsFile || !fileMap.openOrdersFile || !fileMap.revenueFile) {
        throw new Error('Missing one or more required files. Please upload Bookings, Open Orders, and Revenue Excel files.');
      }
      
      // Process the data
      const data = await extractKpiData(fileMap);
      
      if (!data) {
        throw new Error('Failed to process Excel data. Please check your files and try again.');
      }
      
      setDashboardData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {!dashboardData ? (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Bold X Company KPI Dashboard
          </h1>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Excel Files
            </label>
            <p className="text-sm text-gray-600 mb-4">
              Please upload the following Excel files to generate the dashboard:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              <li>KPI_Leadership_CustomerBookings_EXCELDATA_.xls</li>
              <li>KPI_Leadership_OpenOrders_EXCELDATA_.xls</li>
              <li>KPI_Revenue_EXCELDATA_.xls</li>
            </ul>
            
            <div className="mt-4">
              <input
                type="file"
                multiple
                accept=".xls,.xlsx"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
          </div>
          
          {loading && (
            <div className="text-center p-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p>Processing Excel data...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          )}
          
          {/* Demo Dashboard Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setDashboardData({})} // Use default data in KPIDashboard
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              View Demo Dashboard
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 mb-6">
            <button
              onClick={() => setDashboardData(null)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              ← Back to Upload
            </button>
          </div>
          
          <KPIDashboard data={dashboardData} />
        </>
      )}
    </div>
  );
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
