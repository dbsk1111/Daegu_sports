$(function(){
  $(window).scroll(function(){
    // gnb lnb 변화
    let thisScrollTop = $(this).scrollTop();
    let dHeight = $(document).height();
    let wHeight = $(this).height();
    let documentBottom = dHeight - (thisScrollTop + wHeight);
    if( thisScrollTop > 0 && documentBottom > 50 ){
      $('.section_name').css({'background':'rgba(255,255,255,1)','box-shadow':'0 0 1px rgba(0,0,0,0.2)'})
      $('#lnb, .active_section:before').css('opacity','1')
      $('#lnb, .active_section:before').css('visibility','visible')
      $('#header').addClass('on')
    }else if( thisScrollTop == 0){
      $('.section_name').css({'background':'rgba(255,255,255,0)','box-shadow':'0 0 1px rgba(0,0,0,0)'})
      $('#header').removeClass('on')
    }else if( thisScrollTop > 0 && documentBottom < 50 ){
      $('#lnb, .active_section:before').css('opacity','0')
      $('#lnb, .active_section:before').css('visibility','hidden')
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
        // $('#lnb li a').each(function(){
        //   let getLnbMenu = $(this).attr('href');
        //   let lnbMenu = getLnbMenu.substr(5,1);
        //   if( lnbMenu == listActNum ){
        //     $(this).addClass('active_section')
        //   }else{
        //     $(this).removeClass('active_section')
        //   }
        // })
      }
    })
    return false;
  })

  // $(window).scroll(function(){
  //
  //   })

    // navivation fixed
    const navBar = $("nav");
    // console.log('window height :'+wHeight+',현재 스크롤 탑의 값 :'+thisScrollTop)
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });


})
