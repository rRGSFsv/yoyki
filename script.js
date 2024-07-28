document.addEventListener('DOMContentLoaded', function () {
    const rainFront = document.querySelector('.rain.front-row');
    const rainBack = document.querySelector('.rain.back-row');

    function createRainDrops(rainElement, dropCount) {
        let increment = 0;
        let drops = "";

        while (increment < 100) {
            let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
            let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            increment += randoFiver;
            let delay = Math.random() * 4; // random delay between 0 and 4 seconds
            drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + 100}%; animation-delay: ${delay}s; animation-duration: 1.5s;"><div class="stem" style="animation-delay: ${delay}s; animation-duration: 1.5s;"></div><div class="splat" style="animation-delay: ${delay}s; animation-duration: 1.5s;"></div></div>`;
        }

        rainElement.innerHTML = drops;
    }

    createRainDrops(rainFront, 25);
    createRainDrops(rainBack, 25);
});
