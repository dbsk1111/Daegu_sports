$(function(){
  $(window).scroll(function(){
    // gnb lnb 변화
    let thisScrollTop = $(this).scrollTop();
    let dHeight = $(document).height();
    let wHeight = $(this).height();
    let documentBottom = dHeight - (thisScrollTop + wHeight);
    if( thisScrollTop > 0 && documentBottom > 50 ){
      $('.section_name').addClass('on')
      $('#header').addClass('on')
      $('#lnb').removeClass('hide')
    }else if( thisScrollTop == 0){
      $('.section_name').removeClass('on')
      $('#header').removeClass('on')
    }else if( thisScrollTop > 0 && documentBottom < 50 ){
      $('#lnb').addClass('hide')
    }
    // lnb 활성화
    $('section').each(function(){
      let secId = $(this).attr('id');
      let thisOffset = $(this).offset().top;
      if( thisOffset <= thisScrollTop ){
        $('.lnb_bar li').each(function(){
          let aTag = $(this).children();
          let aHref = $(this).children().attr('href').substring(1);
          if( secId == aHref){
            $(aTag).addClass("active_section");
          }else{
            $(aTag).removeClass("active_section");
          }
        })
      }
    })

    // 헤더 고정
    const navBar = $("nav");
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  })

  // lnb 이동
  $('#lnb a').click(function(){
    let winHeight = $(window).height();
    let getGoto = $(this).attr('href');
    let goTo = getGoto.substr(1);
    let listActNum = getGoto.substr(5,1);
    $('section').each(function(){
      let secId = $(this).attr('id');
      let secTop = $(this).offset().top;
      if( goTo == secId){
        window.scroll({ top: secTop, behavior: 'smooth' });
      }
    })
    return false;
  })

  // gallery slide
  let widthNum = parseInt($('.slide_wrap li').css('width')) + parseInt($('.slide_wrap li').css('margin-right'));
  let slideLeng = $('.slide li').length;
  let afterNum = 0;

  $('.slide').css('width', widthNum * slideLeng)
  $('.slide li:last').prependTo('.slide')
  $('.slide').css('margin-left',-widthNum)

  $(window).resize(function(){
    widthNum = parseInt($('.slide_wrap li').css('width')) + parseInt($('.slide_wrap li').css('margin-right'));
    afterNum = widthNum;
    $('.slide').css('margin-left', -afterNum)
  })

  $('.slide_button').on('click',function(){
    if( $(this).hasClass('prev') ){
      slider(1);
    }else if( $(this).hasClass('next') ){
      slider(-1);
    }
  })

  function slider( dir ){
    let caInMarginLeft = $('.slide').css('margin-left');
    if(!$('.slide').is(':animated')){
      $('.slide').animate({marginLeft: parseInt(caInMarginLeft) + ( dir * widthNum ) },500,'swing',function(){
        if( dir == 1 ){
          $('.slide li:last').prependTo('.slide')
        }else{
          $('.slide li:first').appendTo('.slide')
        }
        $('.slide').css('margin-left', -widthNum)
      })
    }
  }
  // auto slide
  let timerId = setInterval(function(){
    $('.slide_button.next').trigger('click');
  },5000);
  $('.slide_wrap').mouseenter(function(){
    // auto slide stop;
    clearInterval(timerId);
  }).mouseleave(function(){
    // auto slide start;
    timerId = setInterval(function(){
      $('.slide_button.next').click();
    },5000);
  })

  // 말줄임표
  const length = 48;
  $('.tab_item p').each(function(){
    if( $(this).text().length >= length ){
      $(this).text($(this).text().substr(0,length)+'..');
    }
  })
})
