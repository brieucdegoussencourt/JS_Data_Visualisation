// Function to fetch data from external source
async function fetchData() {
    console.log('Fetching data...'); // Log for fetching data
    const response = await fetch(`https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json&_=${new Date().getTime()}`);    
    const data = await response.json();
    console.log('Data fetched:', data); // Log fetched data
    return data.map(point => ({ x: point[0], y: parseInt(point[1]) }));
}

// Function to create the chart
async function createChart() {
    console.log('Creating chart...'); // Log for creating chart
    const ctx = document.getElementById('chart3').getContext('2d');
    const dataPoints = await fetchData(); // Fetch initial data points

    // Initialize the Chart.js chart
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Live Data',
                data: dataPoints, // Initial data points
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }]
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Live Chart with Data from External JSON'
                }
            }
        }
    });

    // Function to update the chart with new data
    async function updateChart() {
        console.log('Updating chart...'); // Log for updating chart
        const newDataPoints = await fetchData(); // Fetch new data points
        console.log('New data points:', newDataPoints); // Log new data points
        chart.data.datasets[0].data = newDataPoints; // Update chart data
        chart.update(); // Refresh chart
        console.log('Chart updated'); // Log chart updated
    }

    // Set interval to update chart data every second
    setInterval(updateChart, 1000);
}

createChart(); // Call the function to create the chart