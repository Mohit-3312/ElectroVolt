// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top
mybutton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Inside your navbar.js, after innerHTML injection:
const authModalEl = document.getElementById('authModal');
if (authModalEl) {
    new bootstrap.Modal(authModalEl);
}