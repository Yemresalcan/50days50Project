const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

setTimeout(function() {
    var marquee = document.querySelector("footer");
    marquee.style.display = "none";
}, 15000)