<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KPI Dashboard Comparison</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React and ReactDOM (specific versions) -->
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <!-- Babel for JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.2/babel.min.js"></script>
    <!-- Recharts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/recharts/2.5.0/Recharts.min.js"></script>
    
    <!-- Add prop-types which Recharts depends on -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.8.1/prop-types.min.js"></script>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #f5f5f5;
        }
        #root {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div id="root">
        <!-- This content will show if React fails to load -->
        <div style="text-align: center; padding: 40px; font-family: system-ui, sans-serif;">
            <h1>KPI Dashboard</h1>
            <p>Loading dashboard... If you see this message, there might be an issue with loading the React components.</p>
            <div id="debug-info" style="margin-top: 20px; text-align: left; background: #f5f5f5; padding: 15px; border-radius: 5px;">
                <p><strong>Debugging Information:</strong></p>
                <p>This section will show loading status information.</p>
            </div>
        </div>
    </div>
    
    <!-- Basic debugging script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const debugInfo = document.getElementById('debug-info');
            debugInfo.innerHTML += '<p>DOM fully loaded</p>';
            
            // Check if scripts are loading
            setTimeout(function() {
                debugInfo.innerHTML += '<p>React available: ' + (typeof React !== 'undefined') + '</p>';
                debugInfo.innerHTML += '<p>ReactDOM available: ' + (typeof ReactDOM !== 'undefined') + '</p>';
                debugInfo.innerHTML += '<p>Recharts available: ' + (typeof Recharts !== 'undefined') + '</p>';
            }, 2000);
        });
    </script>

    <!-- Your KPI Dashboard Component - Inline to avoid path issues -->
    <script type="text/babel">
        // KPI Dashboard Component
        const KPIDashboardComparison = () => {
          // Monthly data with current vs previous comparison
          const openOrdersData = [
            {month: '8/2024', current: 6321, previous: 10625, change: -4304},
            {month: '9/2024', current: 7719, previous: 13296, change: -5577},
            {month: '10/2024', current: 14755, previous: 14755, change: 0},
            {month: '11/2024', current: 44582, previous: 47417, change: -2835},
            {month: '12/2024', current: 511708, previous: 511708, change: 0},
            {month: '1/2025', current: 211661, previous: 239233, change: -27572},
            {month: '2/2025', current: 241201, previous: 270558, change: -29357},
            {month: '3/2025', current: 1002886, previous: 1107158, change: -104272},
            {month: '4/2025', current: 1609860, previous: 1610879, change: -1019},
            {month: '5/2025', current: 1071682, previous: 1043950, change: 27732},
            {month: '6/2025', current: 1007433, previous: 955014, change: 52419},
            {month: '7/2025', current: 674774, previous: 637116, change: 37658},
            {month: '8/2025', current: 522124, previous: 449561, change: 72563}
          ];

          // Business line data for comparison
          const businessLineData = [
            {name: 'HERMETICS', current: 5031088, previous: 5060907, change: -29819},
            {name: 'PRECISION', current: 3392425, previous: 3337142, change: 55283}
          ];

          // Top 5 customer changes
          const topCustomerChanges = [
            {name: 'L3 Harris', value: 28257, percent: 2.78},
            {name: 'Honeywell ACS', value: 18248, percent: 5.43},
            {name: 'Cat Engine Systems', value: 17333, percent: 5.61},
            {name: 'ITT Aerospace', value: -7553, percent: -0.42},
            {name: 'Steris Corporation', value: -15947, percent: -4.76}
          ];

          // March 2025 metrics
          const marchMetrics = [
            {category: 'Revenue', current: 393005, previous: 160299, change: 232706, changePercent: 145.17},
            {category: 'Bookings', current: 408000, previous: 286703, change: 121297, changePercent: 42.31}
          ];

          // Format numbers for tooltips
          const formatNumber = (value) => `${value.toLocaleString()}`;
          
          // Colors for UI
          const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
          const CHANGE_COLORS = {positive: '#4CAF50', negative: '#F44336'};

          const { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } = Recharts;

          return (
            <div className="p-4 bg-gray-50">
              <h1 className="text-2xl font-bold text-center mb-6">KPI Dashboard - Weekly Comparison</h1>
              
              {/* Summary Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold text-center mb-2">Open Orders</h2>
                  <p className="text-2xl text-center text-blue-600 font-bold">${(8423513).toLocaleString()}</p>
                  <p className="text-center text-green-500">▲ ${Math.abs(25464).toLocaleString()} ({0.30}%)</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold text-center mb-2">Revenue</h2>
                  <p className="text-2xl text-center text-green-600 font-bold">${(16633576).toLocaleString()}</p>
                  <p className="text-center text-green-500">▲ ${Math.abs(232705).toLocaleString()} ({1.42}%)</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold text-center mb-2">Bookings</h2>
                  <p className="text-2xl text-center text-purple-600 font-bold">${(12804906).toLocaleString()}</p>
                  <p className="text-center text-green-500">▲ ${Math.abs(167569).toLocaleString()} ({1.33}%)</p>
                </div>
              </div>

              {/* March 2025 Performance */}
              <div className="bg-white p-4 rounded shadow mb-6">
                <h2 className="text-lg font-semibold mb-4">March 2025 Performance</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={marchMetrics} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis tickFormatter={formatNumber} />
                    <Tooltip formatter={formatNumber} />
                    <Legend />
                    <Bar dataKey="current" name="Current Week" fill="#0088FE" />
                    <Bar dataKey="previous" name="Previous Week" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-2 p-3 bg-blue-50 rounded text-sm">
                  <span className="font-bold">Key Insights:</span> March revenue up 145.17% and bookings up 42.31% from previous report
                </div>
              </div>

              {/* Monthly Open Orders Trend */}
              <div className="bg-white p-4 rounded shadow mb-6">
                <h2 className="text-lg font-semibold mb-4">Open Orders - Monthly Comparison</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={openOrdersData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatNumber} />
                    <Tooltip formatter={formatNumber} />
                    <Legend />
                    <Line type="monotone" dataKey="current" name="Current" stroke="#0088FE" />
                    <Line type="monotone" dataKey="previous" name="Previous" stroke="#8884d8" strokeDasharray="5 5" />
                    <Bar dataKey="change" name="Change" fill={(entry) => 
                      entry.change >= 0 ? CHANGE_COLORS.positive : CHANGE_COLORS.negative} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Business Line Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold mb-4">Business Line Changes</h2>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={businessLineData} layout="vertical" 
                             margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tickFormatter={formatNumber} />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip formatter={formatNumber} />
                      <Legend />
                      <Bar dataKey="current" name="Current" fill="#0088FE" />
                      <Bar dataKey="previous" name="Previous" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-2 text-sm">
                    <p>Hermetics: <span className="text-red-500">▼ $29,819 (-0.59%)</span></p>
                    <p>Precision: <span className="text-green-500">▲ $55,283 (1.66%)</span></p>
                  </div>
                </div>

                {/* Top Customer Changes */}
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold mb-4">Top Customer Changes</h2>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={topCustomerChanges} layout="vertical"
                             margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tickFormatter={formatNumber} />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip formatter={formatNumber} />
                      <Bar dataKey="value" name="Change" fill={(entry) => 
                        entry.value >= 0 ? CHANGE_COLORS.positive : CHANGE_COLORS.negative}>
                        {topCustomerChanges.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.value >= 0 ? CHANGE_COLORS.positive : CHANGE_COLORS.negative} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-white p-4 rounded shadow mb-6">
                <h2 className="text-lg font-semibold mb-2">Key Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-blue-600 mb-1">Open Orders Shifts</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Q1 2025 shows reduced open orders: Jan (-11.5%), Feb (-10.9%)</li>
                      <li>March 2025 decreased by 9.4% ($104K less)</li>
                      <li>Late 2025 orders increased: Aug 2025 up 16.1% ($72.5K)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-600 mb-1">Business Line Performance</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Precision line gaining strength: +1.66% ($55K)</li>
                      <li>Hermetics line slight decline: -0.59% ($30K)</li>
                      <li>Customer movement: L3 Harris (+$28K), Cat Systems (+$17K)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        };
    </script>
    
    <!-- Main script to render your React component -->
    <script type="text/babel">
        // Add error handling
        try {
            // Check if components loaded correctly
            console.log("React loaded:", typeof React !== 'undefined');
            console.log("ReactDOM loaded:", typeof ReactDOM !== 'undefined');
            console.log("Recharts loaded:", typeof Recharts !== 'undefined');
            
            // Modern React 18 way of rendering
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <KPIDashboardComparison />
                </React.StrictMode>
            );
        } catch (error) {
            console.error("Error rendering React component:", error);
            document.getElementById('root').innerHTML = '<div style="color: red; padding: 20px;">Error loading dashboard. Please check console for details.</div>';
        }
    </script>
</body>
</html>
