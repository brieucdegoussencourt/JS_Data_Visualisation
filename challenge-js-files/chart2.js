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

(async function() {
    const data = tableToObject();
    console.log(data);  // Debugging line

    const countries = data.map(country => country.country);
    console.log(countries);  // Debugging line

    const data2007_09 = data.map(country => country.data["2007-09"]);
    const data2010_12 = data.map(country => country.data["2010-12"]);

    new Chart(
        document.getElementById('chart2'),
        {
            type: 'bar',  // Horizontal bar chart
            data: {
                labels: countries,
                datasets: [
                    {
                        label: '2007-09',
                        data: data2007_09,
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '2010-12',
                        data: data2010_12,
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y',  // This makes the chart horizontal
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
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