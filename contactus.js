document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');
    var formMessage = document.getElementById('formMessage');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '') {
            showMessage('Please enter your name.', 'error');
            return;
        }

        if (email === '') {
            showMessage('Please enter your email address.', 'error');
            return;
        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (subject === '') {
            showMessage('Please enter a subject.', 'error');
            return;
        }

        if (message === '') {
            showMessage('Please enter your message.', 'error');
            return;
        }

        showMessage('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();

        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    });

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        
        if (type === 'error') {
            formMessage.style.color = '#e74c3c';
        } else {
            formMessage.style.color = '#27ae60';
        }
    }
});