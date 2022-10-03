const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//toggle nav
// kalau function biasa this mengacu ke elemen toggle atau cek lexical scope nya 
// tapi kalau arrow function this mengacu ke window tidak ada konsep this
toggle.addEventListener('click', function () {
     document.body.classList.toggle('show-nav')
});

open.addEventListener('click', function () {
     modal.classList.add('show-modal');
})


close.addEventListener('click', function () {
     modal.classList.remove('show-modal');
})

//hide modal on outside click
window.addEventListener('click', function (e) {
     e.target == modal ? modal.classList.remove('show-modal') : false
})