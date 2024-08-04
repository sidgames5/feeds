const userAgent = navigator.userAgent;
const currentUrl = window.location.href;

fetch('https://analytics.thefossrant.com/collector', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userAgent: userAgent,
        url: currentUrl
    })
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));