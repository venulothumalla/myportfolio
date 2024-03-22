/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

/* ----- DOWNLOAD CV FUNCTION ----- */
function downloadCV() {
  var cvUrl = 'file:///C:/venu%20files/VenuExpRes.pdf';
  var link = document.createElement('a');
  link.download = 'VenuExpRes.pdf';
  link.href = cvUrl;
  link.click();
}

// Add click event listener for the download CV buttons
document.getElementById("downloadCvBtn").addEventListener("click", downloadCV);
document.getElementById("downloadCvBtnFeatured").addEventListener("click", downloadCV);
document.getElementById("downloadCvBtnAbout").addEventListener("click", downloadCV);

function redirectToLinkedIn(){
  window.location.href = "https://www.linkedin.com/in/venu-madhav-7073761b3/"
}

function redirectToGithub(){
  window.location.href = "https://github.com/venulothumalla?tab=repositories/"
}

// document.addEventListener("DOMContentLoaded", function() {
//   emailjs.init('venulothumalla@gmail.com'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

  // Define the sendEmail function outside of the DOMContentLoaded event listener
// Define the sendEmail function outside of the DOMContentLoaded event listener
function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_gwjv7lq", "template_3tykpds", {
      from_name: name,
      reply_to: email,
      message: message
  })
  .then(function(response) {
      console.log('Email sent successfully:', response);
      alert('Email sent successfully!');
      // Optionally, you can reset the form after successful submission
      document.getElementById('contact-form').reset();
  }, function(error) {
      console.error('Email sending failed:', error);
      alert('Failed to send email. Please try again later.');
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS here
  emailjs.init('Tm2DnUNA1-Y5fO2is'); // Replace 'YOUR_PUBLIC_KEY' with your EmailJS Public Key

  // Add click event listener for the send button
  document.querySelector(".btn").addEventListener("click", sendEmail);
});