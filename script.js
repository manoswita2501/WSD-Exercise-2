// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar will close when we click on any of the Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

$(document).ready(function () {
  $("#registrationForm").submit(function (event) {
    event.preventDefault();

    // Get user input
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();

    // Email and phone number validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^[0-9]{10}$/;

    var isEmailValid = emailPattern.test(email);
    var isPhoneValid = phonePattern.test(phoneNumber);

    if (!isEmailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPhoneValid) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }

    // If both email and phone are valid, submit the form
    alert("Form submitted successfully!");
    $(this).unbind('submit').submit();
  });
});

$(document).ready(function () {
  $('#carouselHome').carousel({
    interval: false, // Disable autoplay
    wrap: false // Prevent looping
  });
});
