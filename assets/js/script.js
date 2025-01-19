
// Mobile menu functinality
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menu-btn").style.display = 'none';
}

// Close the menu and navigate directly to the selected list item
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu-btn").style.display = 'block';
}

// Add click event listeners to the list items
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById("myNav");
    const menuBtn = document.getElementById("menu-btn");
    const listItems = document.querySelectorAll("#myNav .list-item");

    listItems.forEach(item => {
        item.addEventListener("click", function () {
            // Close the overlay menu
            nav.style.width = "0%";
            
            // Make the menu button visible and clickable
            menuBtn.style.display = 'block';

            // Optionally, scroll to the clicked section (if it has an ID)
            const targetId = this.getAttribute("data-target");
            if (targetId) {
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});



// Header background color on scrolled
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
});


// SMooth scroll intoview
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});



// Show the button when scrolling down
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});


// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



// Preloader 
const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function(){
        loader.style.display = "none"
    }, 2000);
});