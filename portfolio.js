document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });


    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function changeNavActive() {
        let index = sections.length;
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", changeNavActive);
    changeNavActive(); // Initial call to highlight current section
});

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) { // Show back to top button after scrolling down 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scrolling to the top of the page
});
