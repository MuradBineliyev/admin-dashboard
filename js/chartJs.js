const ctx1 = document.getElementById('chart-1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Mühasibatlıq', 'İnsan Resursları', 'Satınalma/Logistika', 'Yol-İnşaat Mühəndisliyi', 'IT-Web', 'IT-Rəqəmsal Marketinq'],
        datasets: [{
            label: 'Təcrübə iştirakçılarının sayı(sahələrə görə)',
            data: [17, 18, 14, 10, 25, 6],
            backgroundColor: ['blue','red','green','yellow','orange','purple']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
const ctx2 = document.getElementById('chart-2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Mühasibatlıq', 'İnsan Resursları', 'Satınalma/Logistika', 'Yol-İnşaat Mühəndisliyi', 'IT-Web', 'IT-Rəqəmsal Marketinq'],
        datasets: [{
            label: 'Təcrübə iştirakçılarının sayı(sahələrə görə)',
            data: [17, 18, 14, 10, 25, 6],
            backgroundColor: ['blue','red','green','yellow','orange','purple']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});