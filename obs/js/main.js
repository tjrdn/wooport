$(function(){

    $(".regular").slick({
        arrows:true,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true,
        pauseOnHover:true,
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });

      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows:false,
        dots: true,
        infinite:true,
        pauseOnHover:true,
        autoplay:true,
        autoplayspeed:500,
      });
      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        arrows: false,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplayspeed : 2000,
        pauseOnHover : true,
      });

    $('.close').click(function(){
        $('#pop_up').slideUp();
    })
    
    
    var lang = 0;
    $('.lang').click(function(){
        /*다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
        $('.top button.login').removeClass('on');
        $('.top div.login_box').hide();
        login = 0;
        $('.top button.search').removeClass('on');
        $('.top div.search_box').hide();
        search = 0;
        
        if(lang == 0){
            $('.lang_box').fadeIn();
            $('.lang').addClass('on');
            lang = 1;
        }
        else{
            $('.lang_box').fadeOut();
            $('.lang').removeClass('on');
            lang = 0;
        }
    })
    var login = 0;
    $('.login').click(function(){
        $('.top button.lang').removeClass('on');
        $('.top div.lang_box').hide();
        lang = 0;
        $('.top button.search').removeClass('on');
        $('.top div.search_box').hide();
        search = 0;
        if(login == 0){
            $('.login_box').fadeIn();
            $('.login').addClass('on');
            login = 1;
        }
        else{
            $('.login_box').fadeOut();
            $('.login').removeClass('on');
            login = 0;
        }
    })
    var search = 0;
    $('.search').click(function(){
        $('.top button.login').removeClass('on');
        $('.top div.login_box').hide();
        login = 0;
        $('.top button.lang').removeClass('on');
        $('.top div.lang_box').hide();
        lang = 0;
        if(search == 0){
            $('.search_box').fadeIn();
            $('.search').addClass('on');
            search = 1;
        }
        else{
            $('.search_box').fadeOut();
            $('.search').removeClass('on');
            search = 0;
        }
    })
})//제이쿼리 전체 끝