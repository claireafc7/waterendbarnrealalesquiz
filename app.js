// app.js
import { ales } from './ales.js';

document.getElementById('find-ale-button').addEventListener('click', () => {
    const strength = document.getElementById('strength').value;
    const colour = document.getElementById('colour').value;
    const flavourElements = document.querySelectorAll('input[name="flavour"]:checked');
    const selectedFlavours = Array.from(flavourElements).map(el => el.value.toLowerCase());

    // Filter ales by strength and colour
    const matchingAles = ales.filter(ale => ale.strength === strength && ale.colour.includes(colour));

    if (matchingAles.length === 0) {
        alert("No ales match the selected criteria.");
        return;
    }

    // Sort ales by the number of matching flavours
    const scoredAles = matchingAles.map(ale => {
        const matchCount = ale.flavour.reduce((count, flavour) => {
            return count + (selectedFlavours.includes(flavour.toLowerCase()) ? 1 : 0);
        }, 0);
        return { ...ale, matchCount };
    });

    scoredAles.sort((a, b) => b.matchCount - a.matchCount);

    // If there's a tie, select one randomly
    const bestAles = scoredAles.filter(ale => ale.matchCount === scoredAles[0].matchCount);
    const bestAle = bestAles[Math.floor(Math.random() * bestAles.length)];


    // Store result in local storage
    localStorage.setItem('bestAle', JSON.stringify(bestAle));

    // Redirect to results.html
    window.location.href = 'results.html';
});