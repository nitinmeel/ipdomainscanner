const searchBtn = document.getElementById('search-btn');
const ipInput = document.getElementById('ip-input');
const resultContainer = document.getElementById('result-container');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const ipAddress = ipInput.value.trim();
    if (ipAddress) {
        fetch(`search.php?ip=${ipAddress}`)
            .then(response => response.json())
            .then(data => {
                const resultHtml = `
                    <h2>IP Details</h2>
                    <ul>
                        <li><strong>IP Address:</strong> ${data.query}</li>
                        <li><strong>Hostname:</strong> ${data.isp}</li>
                        <li><strong>Type:</strong> ${data.as}</li>
                        
                        <li><strong>Country Code:</strong> ${data.countryCode}</li>
                        <li><strong>Country Name:</strong> ${data.country}</li>
                        <li><strong>Region Code:</strong> ${data.region}</li>
                        <li><strong>Region Name:</strong> ${data.regionName}</li>
                        <li><strong>City:</strong> ${data.city}</li>
                        <li><strong>Zip:</strong> ${data.zip}</li>
                        <li><strong>Latitude:</strong> ${data.lat}</li>
                        <li><strong>Longitude:</strong> ${data.lon}</li>
                    </ul>
                `;
                resultContainer.innerHTML = resultHtml;
            })
            .catch(error => {
                console.error(error);
                resultContainer.innerHTML = '<p>Error occurred while fetching data.</p>';
            });
    } else {
        resultContainer.innerHTML = '<p>Please enter a valid IP address.</p>';
    }
});
