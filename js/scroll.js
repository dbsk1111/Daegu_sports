$(function(){
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();
    let section_offset = $('section').offset().top;
    // console.log(thisOffset);
    // let thisOffsetArr = [];
    // $('section').each(function(){
      // let sectionIndex = $(this).index() - 2;
      // let thisOffset = $(this).offset().top;
      // thisOffsetArr.push(thisOffset);
      // console.log(thisOffsetArr);
      // if ( thisOffset <= thisScrollTop && thisOffset < thisScrollTop + wHeight){
      // if ( thisOffset <= thisScrollTop && thisOffset < thisScrollTop + wHeight ){
        // console.log($('.section_name'));
        // console.log($(this).offset().top);
        // console.log(thisOffset);
        // console.log( $(this) );
        // $('.section_name').addClass('active_section')
      // }else{
        // $('.section_name').removeClass('active_section')
      })
  //   })
  // })

  // $(window).scroll(function(){
  //   let wHeight = $(this).height();
  //   let thisOffset = $(this).offset().top;
  //
  //
  //   })





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
  })

  // lnb 이동
  $('#lnb a').click(function(){
    let winHeight = $(window).height();
    let getGoto = $(this).attr('href');
    let goTo = getGoto.substr(1);
    let listActNum = getGoto.substr(5,1);
    // console.log(listActNum);

    $('section').each(function(){
      let secId = $(this).attr('id');
      let secTop = $(this).offset().top;
      if( goTo == secId){
        window.scroll({ top: secTop, behavior: 'smooth' });
        $('#lnb li a').each(function(){
          let getLnbMenu = $(this).attr('href');
          let lnbMenu = getLnbMenu.substr(5,1);
          if( lnbMenu == listActNum ){
            $(this).addClass('active_section')
          }else{
            $(this).removeClass('active_section')
          }
        })
      }
    })
    return false;
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

  // 탑 버튼, 올라가기
  $('.btn_top').click(function(){
    window.scroll({ top: 0, behavior: 'smooth' });
    return false;
  });

  // 탑 버튼, 진행도 표시
    let progressPath = $('path')[0];
    let pathLength = progressPath.getTotalLength(); // 307.91943359375, 패스의 총 길이
    // progressPath.css('stroke-dasharray', pathLength) // 어떻게 적용하지?
    progressPath.style.strokeDasharray = pathLength; // 최대 길이 설정
    progressPath.style.strokeDashoffset = pathLength; // 현재 길이, 0이 최대, 초기화 작업?
    let updateProgress = function() {
      let scroll = $(window).scrollTop(); // 현재 스크롤의 위치, 계속 바뀜
      // $(document).height() 4800 페이지의 최대 크기
      // $(window).height()) 800 현재 창의 크기
      let height = $(document).height() - $(window).height();
      let progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress; // 현재 위치 %로 반영한 offset 조절
    };
    $(window).scroll(updateProgress);
})
