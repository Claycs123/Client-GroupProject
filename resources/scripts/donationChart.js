var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
        datasets: [{
            label: 'Donations',
            data: [10, 20, 2000, 5000, 1000, 150],
            borderColor: 'rgb(10, 120, 3000)',
            tension: 0.1
        }]
    }
});