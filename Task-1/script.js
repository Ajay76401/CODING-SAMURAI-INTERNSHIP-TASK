
// This is used for toggle for mobile view navbar 

const mobileToggle = document.getElementById("mobile-menu")  // here we access the mobile Hamburger Icon 
const navLinks = document.querySelector(".navbar-ul")        // Here we access nav-links

mobileToggle.addEventListener("click", () => {        // we have use mobileToggle and added  addEventlisner is to maake changes on click .we also have used click here
    navLinks.classList.toggle("active")            // here we use navlinks variable .   classlist is used to access all element in navLinks  . Toggle is used can positive into neagtive nad negative into positive on click
})


// this is used to give typing effect for domain like software ddeveloper or graphoc designer

const typingEffect = document.getElementById("typing-animation")

const typingText = [
    "Software Developer",
    "Web Developer",
    "Graphic Designer"
];

const typingSpeed = 50; 
const deletingSpeed = 50; 
const pauseAfterTyping = 2000; // Pause after the word is fully typed
const pauseAfterDeleting = 500; // Pause after the word is fully deleted

function playTyping(text) {

    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            typingEffect.textContent += text[i];

        }, (i * typingSpeed));
    }

    setTimeout(function () {
        for (let i = text.length - 1; i >= 0; i--) {
            setTimeout(function () {
                typingEffect.textContent = text.substring(0, i);

            }, (text.length - i) * deletingSpeed)

        }
    }, (text.length * typingSpeed) + pauseAfterTyping);




    setTimeout(function () {
        typingEffect.textContent = '';
        playTyping(typingText[(typingText.indexOf(text) + 1) % typingText.length]);

    }, (text.length * typingSpeed) + (text.length * deletingSpeed) + pauseAfterTyping +pauseAfterDeleting);


}
playTyping(typingText[0]);




