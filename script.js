
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
    const name = "Sifat";
    const nameElement = document.getElementById("name");
    let nameIndex = 0;

    function typeLetter() {
        if (nameIndex < name.length) {
            nameElement.textContent += name[nameIndex];
            nameIndex++;
            setTimeout(typeLetter, 150);
        } else {
            showProfession();
        }
    }

    const professions = ["Web Developer", "Software Engineer", "Designer"];
    const professionElement = document.getElementById("profession");
    let professionIndex = 0;

    function showProfession() {
        professionElement.textContent = professions[professionIndex];
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(showProfession, 3000); 
    }

    typeLetter(); 
});
// function openTab(evt, tabName) {
//     const tabcontent = document.getElementsByClassName("tabcontent");
//     for (let i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     const tablinks = document.getElementsByClassName("tablinks");
//     for (let i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('.tablinks').click();
// });



document.addEventListener("DOMContentLoaded", function() {
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


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("#main-content").style.display = "block";
    }, 3000); // Adjust time based on animation duration
});

window.onload = function() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("#main-content").style.display = "block";
};

// window.addEventListener('scroll', revealOnScroll);
// revealOnScroll(); 
//  document.querySelector('.Btn').addEventListener('click', function() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' 
//         });
    
//  });

// Optimized version using classes for better performance
const scrollButton = document.querySelector('.Btn');
const homeSection = document.querySelector('#home');

// Hide button initially
if (scrollButton) {
    scrollButton.classList.add('hidden');
}

// Throttle function to improve performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Function to handle scroll behavior for button visibility
function handleScrollButtonVisibility() {
    if (!scrollButton || !homeSection) return;
    
    const homeHeight = homeSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    // Show button when scrolled past home section
    if (scrollPosition > homeHeight * 0.8) {
        scrollButton.classList.remove('hidden');
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
        scrollButton.classList.add('hidden');
    }
}

// Use throttled version for better performance
const throttledScrollHandler = throttle(handleScrollButtonVisibility, 16); // ~60fps

// Add scroll event listeners
window.addEventListener('scroll', throttledScrollHandler);
window.addEventListener('scroll', revealOnScroll);

// Initial calls
revealOnScroll();
handleScrollButtonVisibility();

// Your existing button click functionality
if (scrollButton) {
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}
// Get the button
// let backToTopBtn = document.getElementById("backToTopBtn");

// window.onscroll = function() {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         backToTopBtn.style.display = "block"; 
//     } else {
//         backToTopBtn.style.display = "none"; 
//     }
// }

// When the user clicks on the button, scroll to the top of the document
// backToTopBtn.onclick = function() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// };
