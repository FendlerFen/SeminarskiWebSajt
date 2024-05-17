document.addEventListener('DOMContentLoaded', () => {
    const cardImages = [
        'pack/DH.png',
        'pack/Elis.jpg',
        'pack/geek.jpg',
        'pack/LAgent.png',
        'pack/Ldoom.png',
        'pack/LFA.jpg',
        'pack/LFB.png',
        'pack/LFire.png',
        'pack/LOS.png',
        'pack/Marth.png',
        'pack/Mik.jpg',
        'pack/SP.jpg'
    ];

    const packSize = 5;
    const openPackButton = document.createElement('button');
    openPackButton.innerText = 'Open Pack';
    openPackButton.className = 'open-pack-button';
    document.querySelector('.mid').appendChild(openPackButton);

    openPackButton.addEventListener('click', () => {
        const selectedCards = getRandomCards(cardImages, packSize);
        displayCards(selectedCards);
    });

    function getRandomCards(cardArray, num) {
        let shuffled = cardArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function displayCards(cards) {
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardImg = document.createElement('img');
            cardImg.src = card;
            cardImg.className = 'card-image';
            cardContainer.appendChild(cardImg);
        });
    }
});
