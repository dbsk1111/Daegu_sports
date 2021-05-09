$(function(){
  $('.scroll_down').click(function(){
    let lnbOffset = $('.content').offset().top;
    window.scroll({ top: lnbOffset, behavior: 'smooth' });
    return false;
  })

  $(window).scroll(function(){
    let lnbOffset = $('.lnb').offset().top;
    let thisScrollTop = $(this).scrollTop();
    let dHeight = $(document).height();
    let wHeight = $(this).height();

    if( lnbOffset <= (thisScrollTop + 78) ){
      $('.btn_menu').addClass('scroll_menu');
    }else{
      $('.btn_menu').removeClass("scroll_menu");
    }
  })
})
