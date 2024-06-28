// Function to convert HTML "table1" to JS array of objects, 
// each object represent a country and its offences data by year

function tableToObject() {
    const table = document.getElementById('table1');
    const rows = table.getElementsByTagName('tr');
    const result = [];

    // Get the headers
    const headers = [];
    const headerCells = rows[1].getElementsByTagName('th');
    for (let i = 2; i < headerCells.length; i++) {
        headers.push(headerCells[i].innerText);
    }

    // Get the data
    for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const countryData = {
            country: cells[0].innerText,
            data: {}
        };

        for (let j = 1; j < cells.length; j++) {
            const year = headers[j - 1];
            const value = parseFloat(cells[j].innerText.replace(',', '.'));
            countryData.data[year] = value;
        }

        result.push(countryData);
    }

    return result;
}

// // Usage example
// console.log(tableToObject());

// create random color

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Create a chart from tableToObject data via chart.js and place it in HTML element with id "chart1"
(async function() {
    const data = tableToObject();

    const years = Object.keys(data[0].data);
    const datasets = data.map(country => ({
        label: country.country,
        data: Object.values(country.data),
        fill: false,
        borderColor: getRandomColor(), // Assign a random color to each country
    }));

    new Chart(
        document.getElementById('chart1'),
        {
            type: 'line', // Changed to 'line' for better visualization of multiple datasets
            data: {
                labels: years,
                datasets: datasets
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Offences recorded by the police (2002-2012)'
                    }
                }
            }
        }
    );
})();