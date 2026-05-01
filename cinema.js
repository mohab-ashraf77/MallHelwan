/* eslint-env browser */

document.addEventListener('DOMContentLoaded', function() {
    var showtimeButtons = document.querySelectorAll('.showtimes button');

    showtimeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            showtimeButtons.forEach(function(btn) {
                btn.style.backgroundColor = '';
                btn.style.color = 'var(--primary-blue)';
            });

            button.style.backgroundColor = 'var(--primary-blue)';
            button.style.color = 'var(--bg-color)';

            var card = button.closest('.movie-card');
            var movieName = card ? card.querySelector('.name').innerText : "Movie";
            var time = button.innerText;

            window.alert("Selected: " + movieName + " at " + time);
        });
    });

    var cards = document.querySelectorAll('.movie-card');

    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 30px 50px var(--primary-blue)';
            card.style.transition = 'all 0.4s ease-in-out';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 20px 40px var(--primary-blue)';
        });
    });

    var tags = document.querySelectorAll('.tag');
    tags.forEach(function(tag) {
        tag.addEventListener('mouseover', function() {
            tag.style.backgroundColor ='var( --text-muted)';
            tag.style.color = 'vaer(--bg-color)';
            tag.style.cursor = 'default';
        });
        tag.addEventListener('mouseout', function() {
            tag.style.backgroundColor = 'var(--primary-blue)';
            tag.style.color = '#fff';
        });
    });
});