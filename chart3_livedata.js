document.addEventListener('DOMContentLoaded', () => {
    async function fetchData() {
        console.log('Fetching data...');
        const response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json");
        const data = await response.json();
        console.log('Data fetched:', data);
        return data.map(point => ({ x: point[0], y: parseInt(point[1]) }));
    }

    async function createChart() {
        console.log('Creating chart...');
        const ctx = document.getElementById('chart3').getContext('2d');
        const dataPoints = await fetchData();

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Live Data',
                    data: dataPoints,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    fill: false
                }]
            },
            options: {
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

        async function updateChart() {
            console.log('Updating chart...');
            const newDataPoints = await fetchData();
            console.log('New data points:', newDataPoints);
            chart.data.datasets[0].data = newDataPoints;
            chart.update();
            console.log('Chart updated');
        }

        // Update chart data every second
        setInterval(updateChart, 1000);
    }

    createChart();
});