document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {

    let skillsSection = document.getElementById('skills');
    let skillsPosition = skillsSection.getBoundingClientRect().top;
    if (skillsPosition < window.innerHeight) {
        skillsSection.classList.add('animate');
    }


    let projectsSection = document.getElementById('projects');
    let projectsPosition = projectsSection.getBoundingClientRect().top;
    if (projectsPosition < window.innerHeight) {
        projectsSection.classList.add('animate');
    }


    let contactSection = document.getElementById('contact');
    let contactPosition = contactSection.getBoundingClientRect().top;
    if (contactPosition < window.innerHeight) {
        contactSection.classList.add('animate');
    }
});

document.addEventListener('click', function(event) {
    console.log('Mouse clicked at:', event.clientX, event.clientY);
});


const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');

form.addEventListener('input', function(event) {
    const input = event.target;

    if (input.type === 'email') {
        if (!input.value.includes('@')) {
            input.style.borderColor = 'red'; // Invalid email
        } else {
            input.style.borderColor = 'green'; // Valid email
        }
    }
});

// Show success message upon form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been successfully sent!');
});