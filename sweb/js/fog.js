var txt = document.querySelector(".text");
txt.innerHTML = txt.textContent.replace(/\S/g, "<span>$&</span>");

var arr = document.querySelectorAll("span");
arr.forEach(function(temp) {
    temp.addEventListener('mouseover', () => {
        temp.classList.add('move');
    })
})