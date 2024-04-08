

function drawCard() {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then((response) => {
            if(!response.ok){
                throw new Error("Response error")
            }

            return response.json();
        })
        .then((data) => {
            const cardImageContainer = document.getElementById('cardImageContainer');
            cardImageContainer.innerHTML = '';

            const cardImageElement = document.createElement('img');
            cardImageElement.setAttribute('src', data.cards[0].image);
            
            cardImageContainer.appendChild(cardImageElement);
        })
        .catch(error => console.error('Error fetching card:', error));
}

document.getElementById('drawCardButton').addEventListener('click', drawCard);
