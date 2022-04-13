$(document).ready(function () {
  $("a").click(function () {
    var barra = this.hash;
    $("html,body").animate({ scrollTop: $(barra).offset().top - 70 }, 10000);
  });
});
