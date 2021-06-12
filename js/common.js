$(function(){
  // 모든 메뉴
  let allMenu_on = 0;
  $('.btn_menu').click(function(){
    if( allMenu_on == 0){
      $('.btn_menu').addClass('on')
      allMenu_on = 1;
    }else{
      $('.btn_menu').removeClass('on');
      allMenu_on = 0;
    }
    return false;
  })

  // 모든 메뉴의 서브 메뉴 show/hide
  // $(window).resize(function(){
  //   if( $(window).width() > 500 ){
  //     $('.all_menu_gnb > ul > li .sub_menu').css('height',156)
  //   }else{
  //     $('.all_menu_gnb > ul > li .sub_menu').css('height',0)
  //   }
  // })
  // $('.all_menu_gnb > ul > li').click(function(){
  //   if( $(window).width() <= 500 ){
  //     let menuHeight = $(this).find('.sub_menu');
  //     let listLeng = parseInt(menuHeight.find('li').length);
  //     let listHeight = parseInt(menuHeight.find('li').css('height'));
  //
  //     if( !$(this).hasClass('on') ){
  //       menuHeight.css('height', listLeng*listHeight )
  //       $(this).addClass('on')
  //     }else{
  //       $(this).removeClass('on')
  //       menuHeight.css('height',0)
  //     }
  //   }
  //   return false;
  // })

  $(window).resize(function(){
    if( $(window).width() > 500 ){
      $('.all_sub_menu').css('display', 'block')
    }else{
      $('.all_sub_menu').css('display', 'none')
    }
  })
  $('.all_menu_gnb > ul > li > a').click(function(){
    if( $(window).width() <= 500 ){
      if( $('+ul',this).css('display') !== 'none' ){
        $('+ul',this).slideUp('slow')
        $(this).removeClass('on')
      }else if( $('+ul',this).css('display') == 'none' ){
        $('+ul',this).slideDown('slow')
        $(this).addClass('on')
      }
      return false;
    }
  })

  // 푸터 셀렉트 박스
  let select_on = 0;
  $('.f_select_btn').click(function(){
    if( select_on == 0){
      $('.f_select_btn').addClass('on')
      select_on = 1;
    }else{
      $('.f_select_btn').removeClass('on');
      select_on = 0;
    }
  })

  $(window).scroll(function(){
    // gnb lnb 변화
    let thisScrollTop = $(this).scrollTop();
    let dHeight = $(document).height();
    let wHeight = $(this).height();
    let documentBottom = dHeight - (thisScrollTop + wHeight);
    if( thisScrollTop > 0 && documentBottom > 50 ){
      $('.btn_top').addClass('on')
    }else if( thisScrollTop == 0){
      $('.btn_top').removeClass('on')
    }
  })

  // 탑 버튼, 올라가기
  $('.btn_top').click(function(){
    window.scroll({ top: 0, behavior: 'smooth' });
    return false;
  });

  // 탑 버튼, 진행도 표시
  let progressPath = $('path')[0];
  let pathLength = progressPath.getTotalLength(); // 307.91943359375, 패스의 총 길이
  // progressPath.css('stroke-dasharray', pathLength) // 어떻게 적용?
  progressPath.style.strokeDasharray = pathLength; // 최대 길이 설정
  progressPath.style.strokeDashoffset = pathLength; // 현재 길이, 0이 최대, 초기화 작업?
  let updateProgress = function(){
    let scroll = $(window).scrollTop(); // 현재 스크롤의 위치
    let height = $(document).height() - $(window).height();
    let progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress; // 현재 위치 %로 반영한 offset 조절
  };
  $(window).scroll(updateProgress);
})
