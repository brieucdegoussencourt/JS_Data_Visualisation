// Function to convert HTML "table2" to JS array of objects, 
// each object represent a country and its prison population per period of years.
function tableToObject() {
    const table = document.getElementById('table2');
    const rows = table.getElementsByTagName('tr');
    const result = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const countryData = {
            country: cells[0].innerText,
            data: {
                "2007-09": parseInt(cells[1].innerText),
                "2010-12": parseInt(cells[2].innerText)
            }
        };

        result.push(countryData);
    }

    return result;
}

// Create a chart from tableToObject data via chart.js and place it in HTML element with id "chart2"
(async function() {
    
    const data = tableToObject();
    const countries = data.map(country => country.country);
    const data2007_09 = data.map(country => country.data["2007-09"]);
    const data2010_12 = data.map(country => country.data["2010-12"]);

    new Chart(
        document.getElementById('chart2'),
        {
            type: 'line',
            data: {
                labels: countries,
                datasets: [
                    {
                        label: '2007-09',
                        data: data2007_09,
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        fill: false
                    },
                    {
                        label: '2010-12',
                        data: data2010_12,
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Prison population, average per year, 2007-09 and 2010-12'
                    }
                }
            }
        }
    );
})();