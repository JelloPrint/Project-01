$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

// Fix "Skip Link" Focus in Webkit
$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});