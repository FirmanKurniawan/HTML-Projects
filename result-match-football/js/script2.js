function ambilData() {
  $.getJSON("https://www.scorebat.com/video-api/v3/", function (data) {
    let info = data.response;
    //console.log(data.response.title);
    $.each(info, function (i, data) {
      if (i <= 10) {
        $("#adr1").append(
          `<div class="card mb-3">
          <h5 class="mt-3">` +
            data.title +
            `</h5>
            <div id="forVideo" class="mb-3 mt-3">` +
            data.videos[0].embed +
            `</div>
            <h5 class="">` +
            data.competition +
            `</h5>
            <h5 class="">` +
            data.date +
            `</h5>
            </div>`
        );
      }
    });
  });
}

let adr = document.getElementById("adr1");
adr.addEventListener("mouseover", function (e) {
  e.target.classList.add("border-primary");
});

adr.addEventListener("mouseout", function (e) {
  e.target.classList.remove("border-primary");
});

ambilData();

$(".list-video").on("click", function (e) {
  let content;
  $.getJSON("https://www.scorebat.com/video-api/v3/", function (data) {
    let info = data.response;
    console.log(info[1].videos[0].title);
    $.each(info, function (j, data) {
      content +=
        `<div class="">` +
        data.videos[j].title +
        `</div> <div class="">` +
        data.videos[j].embed +
        `</div>`;
    });

    $("#coba").html(content);
  });
});

// function tampikanSemuaMenu() {
//     $.getJSON('data/pizza.json', function (data) {
//         let menu = data.menu;
//        // console.log(menu);
//        $.each(menu, function (i, data) {
//           $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
//        });

//     });
// }

// tampikanSemuaMenu();

// $('.nav-link').on('click', function() {
//     //semual class dihilangkan
//      $('.nav-link').removeClass('active');
//      //class yang di klik
//      $(this).addClass('active');

//      //DOM
//      let kategori = $(this).html();

//      $('h1').html(kategori);

//      //tampikanSemuaMenu
//      if (kategori == 'All Menu') {
//         $('#daftar-menu').html("");
//          tampikanSemuaMenu();
//          return;
//      }

//     $.getJSON('data/pizza.json', function(data){
//         let menu = data.menu;
//         let content = '';
//         $.each(menu, function(i, data){
//             if (data.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
//             }
//         });

//         $('#daftar-menu').html(content);

//     });
// });
