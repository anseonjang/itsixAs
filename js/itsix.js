$(function () {
    // logo 클릭시 최상단으로 이동
    // "click", function = 로고 클릭시 함수실행 
    /* scrollTop은, 스크롤 위치 이동을 위한 
    jQuery 애니메이션 함수 */
    $("h1.logo").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0 // 수직 스크롤 위치 0 
        }, 400); // 0.4초 
        // .stop() = 예상치 못한 동작을 방지하기 위함 

    });

    // PC + Mobile 메뉴 클릭시 애니메이션으로 위치 이동
    // .menu와 .m_menu의 a 태그 속성 중 href 의 #으로 시작하는 요소 클릭시!!
    $(".menu li a[href^='#'], .m_menu li a[href^='#']").on("click", function () {
        var target = $(this).attr("href");
        var targetPostion = $(target).offset().top;
        // 스크롤 애니메이션 설정 - 0.8초동안 상단으로 스크롤
        $("html,body").animate({
            scrollTop: targetPostion
        }, 800); // 0.8초
        // html,body 동시에 잡아주는 이유는 웹호환성때문 
        // 일관된 동작 보장 위해 두개 다 잡아줌
    });





    // 햄버거버튼 클릭시 - 모바일 메뉴 보기/가리기
    // 스토리 : 햄버거버튼 클릭시 메뉴박스와 X버튼 보기
    // .eq() - jQuery 메서드 - 특정 인덱스(순서값) 선택시 사용 
    $(".rightmenu li").eq(2).click(function () {
        $(".m_menu").show(); /* 보기 */
        $(".rightmenu").hide(); /* 가리기 */
        $(".m_menu li").eq(3).show(); /* X버튼 */
    });
    // X 클릭시 메뉴박스 사라짐
    $(".m_menu li").eq(3).click(function () {
        $(".m_menu").hide();
        $(this).hide();
        $(".rightmenu").show();
    });

});