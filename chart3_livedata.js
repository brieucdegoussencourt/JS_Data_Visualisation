async function fetchData() {
    const response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json");
    const data = await response.json();
    return data.map(point => ({ x: point[0], y: parseInt(point[1]) }));
}

async function createChart() {
    const dataPoints = await fetchData();
    
    const ctx = document.getElementById('chart3').getContext('2d');
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

    // Update chart data periodically
    setInterval(async () => {
        const newDataPoints = await fetchData();
        chart.data.datasets[0].data = newDataPoints;
        chart.update();
    }, 1000); // Update every second
}

createChart();