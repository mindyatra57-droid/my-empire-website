// Scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function () {

    elements.forEach(function(element){

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            element.classList.add("show");
        }

    });

});


// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        
        alert("Please fill all fields");

        event.preventDefault();
    }

});