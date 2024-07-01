//DOMContentLoaded Event: The script is now wrapped inside a DOMContentLoaded event listener to ensure it runs only after the DOM is fully loaded. 
//This prevents the null reference error when trying to access the canvas element.
//The structure of the script remains the same, but it is now safely executed after the DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
    //The fetchData function retrieves data from the external JSON source and maps it to the format required by Chart.js.
    async function fetchData() {
        const response = await fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json");
        const data = await response.json();
        return data.map(point => ({ x: point[0], y: parseInt(point[1]) }));
    }

    async function createChart() {
        // Get the canvas element and its 2D context
        //The 2D context provides a drawing API for drawing shapes, text, images, and other graphics on the canvas.
        const ctx = document.getElementById('chart3').getContext('2d');
        const dataPoints = await fetchData();

        // Create the chart with Chart.js and the fetched data points
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
            //The chart options include the x-axis set to ‘linear’ and the y-axis starting from zero.
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

        //The updateChart function fetches new data and updates the chart.
        async function updateChart() {
            const newDataPoints = await fetchData();
            chart.data.datasets[0].data = newDataPoints;
            chart.update();
        }

        // Update chart data every second
        setInterval(updateChart, 1000);
    }

    createChart();
});