
function handle (id) {
    window.location.href = id + '.html' ;
}

const item1 = document.getElementById("signature");
const item2 = document.getElementById("dataentry");
const item3 = document.getElementById("money-lists");
const item4 = document.getElementById("warehouse-lists");
const item5 = document.getElementById("statistic");
const item6 = document.getElementById("inform");
const item7 = document.getElementById("archives");
const item8 = document.getElementById("excel");

if(item1) item1.addEventListener("click", () => handle('signature'));
if(item2) item2.addEventListener("click", () => handle('dataentry'));
if(item3) item3.addEventListener("click", () => handle('money-lists'));
if(item4) item4.addEventListener("click", () => handle('warehouse-lists'));
if(item5) item5.addEventListener("click", () => handle('statistic'));
if(item6) item6.addEventListener("click", () => handle('inform'));
if(item7) item7.addEventListener("click", () => handle('archives'));
if(item8) item8.addEventListener("click", () => handle('excel'));


document.addEventListener('DOMContentLoaded', function() {
    const copyText = document.querySelector('.text-copy');
    const copyButton = document.getElementById('copy-click');


    copyButton.addEventListener('click', function() {

        const textArea = document.createElement('textarea');
        textArea.value = copyText.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        copyButton.innerText = 'تم النسخ';
        copyButton.style.color = 'rgb(70, 192, 0)';

        setTimeout(function(){
            copyButton.innerText = 'نسخ';
            copyButton.style.color = '';
        }, 3000)
        console.log('copy');
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}




