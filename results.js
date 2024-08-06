// results.js
document.addEventListener('DOMContentLoaded', () => {
    const bestAle = JSON.parse(localStorage.getItem('bestAle'));

    const resultContainer = document.getElementById('result');

    if (!bestAle) {
        resultContainer.innerHTML = `
            <h2>No matching ale found.</h2>
            <p>Unfortunately, we couldn't find an ale that matches your selected criteria. Please try again with different options.</p>
        `;
        return;
    }

    resultContainer.innerHTML = `
        <h2>${bestAle.name}</h2>
        <p>Strength: ${bestAle.strengthCategory} % ABV</p>
        <p>Colour: ${bestAle.colour}</p>
        <p>Flavours: ${bestAle.flavour.join(', ')}</p>
    `;
});



