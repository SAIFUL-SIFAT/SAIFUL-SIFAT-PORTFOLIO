// Script to open About Me sections
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Script for Scroll Animation
function revealOnScroll() {
    var sections = document.querySelectorAll('.section');
    var windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Display name letter by letter
    const name = "Sifat";
    const nameElement = document.getElementById("name");
    let nameIndex = 0;

    function typeLetter() {
        if (nameIndex < name.length) {
            nameElement.textContent += name[nameIndex];
            nameIndex++;
            setTimeout(typeLetter, 150); // Adjust the speed of the typing effect here
        } else {
            showProfession(); // Start showing professions after the name is fully displayed
        }
    }

    // Professions to cycle through
    const professions = ["Web Developer", "Software Engineer", "Designer"];
    const professionElement = document.getElementById("profession");
    let professionIndex = 0;

    function showProfession() {
        professionElement.textContent = professions[professionIndex];
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(showProfession, 3000); // Adjust the time each profession is displayed
    }

    typeLetter(); // Start typing the name
});
function openTab(evt, tabName) {
    // Hide all tabcontent by default
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Automatically click the first tab to display content on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.tablinks').click();
});



document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling is already handled by CSS
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function activateLink(link) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            activateLink(link);
        });
    });

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) { // Adjust -50 to fit your header height
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Adjust the delay as needed
});


window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // to show elements on load if already in view

 document.querySelector('.Btn').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    
});
// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block"; // Show the button
    } else {
        backToTopBtn.style.display = "none"; // Hide the button
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
