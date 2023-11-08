const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    /*ekranın yüksekliğinin 
    beşte dörtü kadar bir değeri 
    triggerBottom adlı bir değişkene atar. 
    Bu değer, kutuların ne zaman görünmeye 
    başlaması gerektiğini belirler. 
    Ekranın yüksekliğinin beşte dörtü kadar 
    bir noktaya gelindiğinde kutular görünür hale gelecektir.*/

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


setTimeout(function() {
    var marquee = document.querySelector("marquee");
    marquee.style.display = "none";
}, 18000)