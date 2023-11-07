const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();  
});

setTimeout(function() {
    var marquee = document.querySelector("marquee");
    marquee.style.display = "none";
}, 18000)
