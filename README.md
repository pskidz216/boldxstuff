# Bold X Company KPI Dashboard

A clean, interactive dashboard for visualizing Key Performance Indicators from Excel data, built with React and Recharts.

![Dashboard Preview](dashboard-preview.png)

## Features

- **Interactive Weekly Data View**: Select different weeks to see detailed metrics
- **Multiple Visualization Types**: Bar charts, line charts, and composed charts
- **Business Line Breakdown**: Separate analysis for Hermetics and Precision business lines
- **Summary Statistics**: Quick view of key metrics with week-over-week comparisons
- **Monthly Totals**: Aggregated data for the entire period
- **Excel Data Integration**: Automatically process data from standard Excel exports
- **Responsive Design**: Works on desktop and mobile devices

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bold-x-kpi-dashboard.git
cd bold-x-kpi-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Required Dependencies

```bash
npm install react recharts xlsx prop-types tailwindcss
```

## Usage

### File Structure

```
src/
├── components/
│   └── KPIDashboard.jsx        # Main dashboard component
├── utils/
│   └── excelDataProcessor.js   # Excel data processing utilities
├── App.jsx                     # Application entry point
└── index.js                    # React initialization
```

### Excel File Requirements

The dashboard requires three Excel files for full functionality:

1. `KPI_Leadership_CustomerBookings_EXCELDATA_.xls` - Contains bookings data
2. `KPI_Leadership_OpenOrders_EXCELDATA_YYYYMMDDHHMMSS.xls` - Contains open orders data
3. `KPI_Revenue_EXCELDATA_YYYYMMDDHHMMSS.xls` - Contains revenue data

### Basic Component Usage

```jsx
import KPIDashboard from './components/KPIDashboard';

// With default data
<KPIDashboard />

// With custom data
<KPIDashboard data={yourCustomData} title="Custom Dashboard Title" />
```

### Data Structure

The dashboard expects data in the following format:

```javascript
const dashboardData = {
  weeks: ['Feb 23', 'March 2', 'March 9', 'March 16', 'March 23'],
  bookings: [70486.35, 286703.12, 121296.78, 423299.53, 261046.76],
  revenueHermetics: [98193.17, 142703.05, 127073.19, 199518.75, 56681.79],
  revenuePrecision: [62106.27, 90002.03, 134947.21, 205204.24, 60818.25],
  openOrders: [23046.88, 93743.15, 39660.34, 138405.99, 85354.30],
  monthlyTotals: {
    openOrders: 380210.66,
    bookings: 1162832.54,
    revenue: 1177247.95,
    hermetics: 624169.95,
    precision: 553078.00
  }
};
```

## Customization

### Styling

The dashboard uses Tailwind CSS for styling. You can customize the appearance by modifying the CSS classes in the component.

### Charts

The dashboard uses Recharts for visualizations. You can customize the charts by modifying the Recharts components in `KPIDashboard.jsx`.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
