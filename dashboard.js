
const pageViewsCtx = document.getElementById('pageViewsChart').getContext('2d');
new Chart(pageViewsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Budgeting',
                data: [150, 180, 210, 190, 230, 250, 275, 300, 290, 310, 320, 330],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: { beginAtZero: true, ticks: { font: { size: 8 } } },
            x: { ticks: { font: { size: 8 } } }
        },
        plugins: {
            legend: { labels: { font: { size: 10 } } },
            tooltip: { titleFont: { size: 10 }, bodyFont: { size: 8 } }
        }
    }
});


const userInteractionsCtx = document.getElementById('userInteractionsChart').getContext('2d');
new Chart(userInteractionsCtx, {
    type: 'bar',
    data: {
        labels: ['Subscribe', 'Read More', 'Share', 'Like', 'Comment'],
        datasets: [{
            label: 'Interactions',
            data: [80, 120, 150, 200, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true, ticks: { font: { size: 8 } } },
            x: { ticks: { font: { size: 8 } } }
        },
        plugins: {
            legend: { labels: { font: { size: 10 } } },
            tooltip: { titleFont: { size: 10 }, bodyFont: { size: 8 } }
        }
    }
});
const conversionRatesCtx = document.getElementById('conversionRatesChart').getContext('2d');
new Chart(conversionRatesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Pending', 'Failed'],
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']
        }]
    },
    options: {
        plugins: {
            legend: { labels: { font: { size: 10 } } },
            tooltip: { titleFont: { size: 10 }, bodyFont: { size: 8 } }
        }
    }
});
