// uses the fetch API to get data from the external JSON source. 
//The data is then mapped to the format required by Chart.js.
async function fetchData() {
    const response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json");
    const data = await response.json();
    return data.map(point => ({ x: point[0], y: parseInt(point[1]) }));
}

async function createChart() {
    const ctx = document.getElementById('chartContainer').getContext('2d');
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
        const newDataPoints = await fetchData();
        chart.data.datasets[0].data = newDataPoints;
        chart.update();
    }

    // Update chart data every second
    setInterval(updateChart, 1000);
}

createChart();