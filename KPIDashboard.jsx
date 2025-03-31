import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  LineChart, 
  BarChart, 
  ComposedChart,
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

/**
 * KPI Dashboard Component
 * 
 * Displays key performance indicators for Bold X Company with interactive
 * weekly data visualization for revenue, bookings, and open orders.
 * 
 * @component
 * @example
 * // Basic usage with default data
 * <KPIDashboard />
 * 
 * // With custom data
 * <KPIDashboard data={customDataObject} title="Custom Dashboard" />
 */
const KPIDashboard = ({ data: externalData, title }) => {
  // Default data extracted from Excel files
  const defaultData = {
    weeks: ['Feb 23', 'March 2', 'March 9', 'March 16', 'March 23'],
    bookings: [70486.35, 286703.12, 121296.78, 423299.53, 261046.76],
    revenueHermetics: [98193.17, 142703.05, 127073.19, 199518.75, 56681.79],
    revenuePrecision: [62106.27, 90002.03, 134947.21, 205204.24, 60818.25],
    openOrders: [23046.88, 93743.15, 39660.34, 138405.99, 85354.30],
    monthlyTotals: {
      openOrders: 380210.66,
      bookings: 1162832.54, // Sum of weekly values
      revenue: 1177247.95,
      hermetics: 624169.95,
      precision: 553078.00
    }
  };

  // Use provided data or default data
  const data = externalData || defaultData;

  // State for active week selection
  const [activeWeek, setActiveWeek] = useState(3); // Default to Week 3 (March 16)

  /**
   * Formats a number as currency
   * @param {number} value - Number to format
   * @returns {string} Formatted currency string
   */
  const formatCurrency = (value) => {
    if (value === undefined || value === null) return '$0';
    return '$' + value.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  // Prepare chart data
  const chartData = data.weeks.map((week, index) => ({
    name: week,
    'Revenue - Hermetics': data.revenueHermetics[index],
    'Revenue - Precision': data.revenuePrecision[index],
    'Bookings': data.bookings[index],
    'Open Orders': data.openOrders[index]
  }));
  
  // Calculate metrics for selected week
  const weekIndex = activeWeek - 1;
  const currentRevenue = data.revenueHermetics[weekIndex] + data.revenuePrecision[weekIndex];
  const currentBookings = data.bookings[weekIndex];
  const currentOpenOrders = data.openOrders[weekIndex];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        {title}
        <span className="ml-2 inline-block bg-green-500 text-white text-xs py-1 px-2 rounded-full">UPDATED MAR 30</span>
      </h1>

      {/* Week Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {data.weeks.map((week, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-md ${activeWeek === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => setActiveWeek(index + 1)}
          >
            Week {index + 1} ({week})
          </button>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Revenue</h2>
          <div className="text-2xl font-bold text-green-600">{formatCurrency(currentRevenue)}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Bookings</h2>
          <div className="text-2xl font-bold text-purple-600">{formatCurrency(currentBookings)}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Open Orders</h2>
          <div className="text-2xl font-bold text-blue-600">{formatCurrency(currentOpenOrders)}</div>
        </div>
      </div>

      {/* Business Revenue Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Hermetics Revenue</h2>
          <div className="text-2xl font-bold text-teal-600">{formatCurrency(data.revenueHermetics[weekIndex])}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Precision Revenue</h2>
          <div className="text-2xl font-bold text-blue-600">{formatCurrency(data.revenuePrecision[weekIndex])}</div>
        </div>
      </div>

      {/* Main Performance Chart */}
      <div className="mb-8 p-4 bg-white border rounded-lg">
        <h2 className="text-lg font-semibold mb-4">March 2025 Performance</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="Revenue - Hermetics" stackId="revenue" fill="#00C49F" />
              <Bar dataKey="Revenue - Precision" stackId="revenue" fill="#0088FE" />
              <Line type="monotone" dataKey="Bookings" stroke="#8884d8" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <span className="font-semibold">Key Insight:</span> March 16th data shows highest bookings at $423,300 with strong revenue performance
        </div>
      </div>

      {/* Business Line Revenue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-white border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Revenue by Business Line</h2>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" dataKey="Revenue - Hermetics" stroke="#00C49F" />
                <Line type="monotone" dataKey="Revenue - Precision" stroke="#0088FE" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Open Orders Trend</h2>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" dataKey="Open Orders" stroke="#0088FE" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bookings Chart */}
      <div className="p-4 bg-white border rounded-lg mb-8">
        <h2 className="text-lg font-semibold mb-4">Bookings Trend</h2>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="Bookings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Totals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Total Revenue</h2>
          <div className="text-xl font-bold text-green-600">{formatCurrency(data.monthlyTotals.revenue)}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Total Bookings</h2>
          <div className="text-xl font-bold text-purple-600">{formatCurrency(data.monthlyTotals.bookings)}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Total Open Orders</h2>
          <div className="text-xl font-bold text-blue-600">{formatCurrency(data.monthlyTotals.openOrders)}</div>
        </div>
      </div>

      {/* Business Line Totals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-teal-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Total Hermetics Revenue</h2>
          <div className="text-xl font-bold text-teal-600">{formatCurrency(data.monthlyTotals.hermetics)}</div>
          <div className="text-sm text-gray-500">53% of total revenue</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h2 className="text-gray-700 font-semibold">Total Precision Revenue</h2>
          <div className="text-xl font-bold text-blue-600">{formatCurrency(data.monthlyTotals.precision)}</div>
          <div className="text-sm text-gray-500">47% of total revenue</div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
KPIDashboard.propTypes = {
  /**
   * Dashboard data object
   */
  data: PropTypes.shape({
    weeks: PropTypes.arrayOf(PropTypes.string),
    bookings: PropTypes.arrayOf(PropTypes.number),
    revenueHermetics: PropTypes.arrayOf(PropTypes.number),
    revenuePrecision: PropTypes.arrayOf(PropTypes.number),
    openOrders: PropTypes.arrayOf(PropTypes.number),
    monthlyTotals: PropTypes.shape({
      openOrders: PropTypes.number,
      bookings: PropTypes.number,
      revenue: PropTypes.number,
      hermetics: PropTypes.number,
      precision: PropTypes.number
    })
  }),
  /**
   * Dashboard title
   */
  title: PropTypes.string
};

// Default props
KPIDashboard.defaultProps = {
  title: 'Bold X Company KPI Dashboard - March 2025',
  data: null // Will use default data if not provided
};

export default KPIDashboard;
