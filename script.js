fetch('data.csv')
    .then(response => response.text())
    .then(rawData => {
        const parsed = Papa.parse(rawData, {
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true,
            delimiter: '\t'
        });

        const data = parsed.data;

        // Clean and convert sales data to numbers
        data.forEach(row => {
            ['20', '21', '22', '23', '24', '25'].forEach(year => {
                row[year] = parseFloat(row[year].replace(/[$,]/g, '')) || 0;
            });
        });

        // Calculate total sales per year
        const years = ['20', '21', '22', '23', '24', '25'];
        const totalSales = years.map(year => 
            data.reduce((sum, row) => sum + row[year], 0)
        );

        // Create bar chart for total sales
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years.map(y => `20${y}`),
                datasets: [{
                    label: 'Total Sales ($)',
                    data: totalSales,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Sales ($)' }
                    },
                    x: { title: { display: true, text: 'Year' } }
                }
            }
        });

        // Populate high sales table (>= $50k in any year)
        const highSalesTable = document.querySelector('#highSalesTable tbody');
        const highSalesCustomers = data.filter(row => 
            years.some(year => row[year] >= 50000)
        );
        highSalesCustomers.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.Customers}</td>
                ${years.map(year => `<td class="${row[year] >= 50000 ? 'table-success' : ''}">$${row[year].toLocaleString()}</td>`).join('')}
            `;
            highSalesTable.appendChild(tr);
        });

        // Identify customers with 3+ years of positive growth
        const growthCustomers = data.map(row => {
            let growthYears = 0;
            for (let i = 1; i < years.length; i++) {
                if (row[years[i]] > row[years[i - 1]] && row[years[i]] > 0 && row[years[i - 1]] > 0) {
                    growthYears++;
                }
            }
            return { ...row, growthYears };
        }).filter(row => row.growthYears >= 3);

        // Populate growth table
        const growthTable = document.querySelector('#growthTable tbody');
        growthCustomers.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.Customers}</td>
                ${years.map(year => `<td>$${row[year].toLocaleString()}</td>`).join('')}
                <td class="table-success">${row.growthYears}</td>
            `;
            growthTable.appendChild(tr);
        });
    })
    .catch(error => console.error('Error loading data:', error));
