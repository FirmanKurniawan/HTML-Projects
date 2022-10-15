const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const letters = document.querySelectorAll('span');
for (const letter of letters) {
    letter.addEventListener('mouseover',()=>{
        letter.classList.add('active');
    })
}
