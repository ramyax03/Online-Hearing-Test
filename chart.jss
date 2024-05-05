// Get the canvas element
var ctx = document.getElementById('audiogramChart').getContext('2d');

// Create the data for the audiogram
var audiogramData = {
    labels: ['250Hz', '500Hz', '1000Hz', '2000Hz', '4000Hz', '8000Hz'],
    datasets: [{
        label: 'Left Ear',
        data: [25, 30, 40, 50, 60, 70], // Example data for left ear
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, {
        label: 'Right Ear',
        data: [20, 25, 35, 45, 55, 65], // Example data for right ear
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Create the audiogram chart
var audiogramChart = new Chart(ctx, {
    type: 'line',
    data: audiogramData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Hearing Level (dB)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Frequency (Hz)'
                }
            }
        }
    }
});
function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 11.1271, lng: 78.6569 } // Centered in Tamil Nadu
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    var hospitals = [
        {
            name: 'Hospital A',
            location: { lat: 13.0827, lng: 80.2707 }, // Chennai
            address: 'Address A, Chennai'
        },
        {
            name: 'Hospital B',
            location: { lat: 11.0168, lng: 76.9558 }, // Coimbatore
            address: 'Address B, Coimbatore'
        }
        // Add more hospitals as needed
    ];

    hospitals.forEach(function(hospital) {
        var marker = new google.maps.Marker({
            position: hospital.location,
            map: map,
            title: hospital.name
        });

        var infowindow = new google.maps.InfoWindow({
            content: '<h3>' + hospital.name + '</h3><p>' + hospital.address + '</p>'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}
