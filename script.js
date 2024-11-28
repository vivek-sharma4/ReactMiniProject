document.getElementById('fetch-data').addEventListener('click', () => {
    const ip = document.getElementById('ip-input').value.trim();

    if (!ip) {
        alert('Please enter a valid IP address.');
        return;
    }

    fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json`)
        .then(response => response.json())
        .then(data => {
            const geojs = document.getElementById('geo-js');
            if (data.error) {
                geojs.innerHTML = `<p>Error: ${data.error}</p>`;
            } else 
            {
                geojs.innerHTML = `
                    <p><strong>IP:</strong> ${data.ip}</p>
                    <p><strong>Country:</strong> ${data.country}</p>
                    <p><strong>City:</strong> ${data.city}</p>
                    <p><strong>Region:</strong> ${data.region}</p>
                    <p><strong>Latitude:</strong> ${data.latitude}</p>
                    <p><strong>Longitude:</strong> ${data.longitude}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching geoloc. data:', error);
            document.getElementById('geo-js').innerHTML = `<p>Failed to fetch location data.</p>`;
        });
});
