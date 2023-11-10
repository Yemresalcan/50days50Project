const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join("");
});


setTimeout(function() {
    var marquee = document.querySelector("footer");
    marquee.style.display = "none";
}, 15000)