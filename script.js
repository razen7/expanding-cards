let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        removeAllActive();
        card.classList.add('active');
    })
})

function removeAllActive() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}