const btnNav = $("header nav .btn-nav");

$(document).ready(() => {
  btnNav.click(() => {
    $("header nav .container ul").toggleClass("active");
    btnNav.toggleClass("active");
  });
});
