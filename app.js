const input = document.getElementById('button-1');
const input2 = document.getElementById('button-2');
const cards = document.getElementsByClassName('card');
console.log(input2)
console.log(cards)

input.addEventListener('change', (e) => {
    if (e.target.checked) {
        for (const card of cards) {
            card.style.backgroundColor = '#003049';
            card.style.color = '#fdf0d5';
        }
    } else {
        for (const card of cards) {
            card.style.backgroundColor = '#fdf0d5';
            card.style.color = '#003049';
        }
    }
})

input2.addEventListener('change', (e) => {
    if (e.target.checked) {
        for (const card of cards) {
            card.style.textTransform = 'uppercase';
        }
    } else {
        for (const card of cards) {
            card.style.textTransform = 'capitalize';

        }
    }
})
