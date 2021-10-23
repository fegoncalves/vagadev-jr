// Slider
$("#carousel").slick({
  prevArrow: `
    <button type="button" class="slick-prev">
      <span><img src="../svgs/angle-left-solid.svg"></span>
      Anterior
    </button>
  `,
  nextArrow: `
    <button type="button" class="slick-next">
      Próximo
      <span><img src="../svgs/angle-right-solid.svg"></span>
    </button>
  `
});




// Lightbox
$(".btn-padrao").on("click", function(event) {
  event.preventDefault()
  $(".lightbox").addClass("active")
  $("body").css("overflow","hidden")
})

$(".lightbox .close").on("click", function(event) {
  event.preventDefault()
  $(".lightbox").removeClass("active")
  $("body").css("overflow","auto")
})




//Menu Hamburguer
$('.menu-hamburger').on('click', function() {
  $('.modal-menu').toggle('active')
})





//Sacola de Compras
$('.btn-padrao').on('click', function() {
  let bagAmount = Number($
    ('.bag-amount').html())
  $('.bag-amount').html(bagAmount+1)
})