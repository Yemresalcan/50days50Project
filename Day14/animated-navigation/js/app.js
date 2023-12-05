const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))



setTimeout(function() {
    var marquee = document.querySelector("footer");
    marquee.style.display = "none";
}, 15000)