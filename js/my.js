// 手机导航
$(function(){
    $(".side-menu-trigger, .sidebar-menu--trigger, .close-login").click(function () {
        if ($(".sidebar-menu").hasClass('is-active')) {
            $(".sidebar-menu").removeClass('is-active');
        } else {
            $(".sidebar-menu").addClass('is-active');
        }
    });
    $(".sidebar-menu__item--back div.close-icon").on("click", function(){
        $(".sidebar-menu").removeClass("is-active");
    });

    $('.sidebar-menu__item--has-children > a').click(function (e) {
        var has = $(this).parent().find('ul');
        if (has.length) {
            e.preventDefault();
            e.stopPropagation();
            var current = $(this).text();
            var parent_title_link = $(this).attr('href');
            $('.sidebar-menu__title').text(current);

            var sibling = $(this).next('.sidebar-menu__list');
            sibling.addClass('is-active');
            $('.sidebar-menu__title').hide();
            $('.sidebar-menu__item.menu-parent-title span').text(current);
            $('.sidebar-menu__item.menu-parent-title a').attr('href', parent_title_link);
            $('ul.sidebar-menu__list').css("top","0px");

        }else{
            window.location.href= $(this).attr('href');
        }

    });

    $('li.sidebar-menu__item--back a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var currentElement = $(e.target).closest('.sidebar-menu__list')
        currentElement.removeClass('is-active');
        var parentElement = currentElement.parent().closest('.sidebar-menu__list')
        if (!parentElement.siblings().hasClass('sidebar-menu__header')) {
            var text = parentElement.siblings().text();
            $('.sidebar-menu__title').text(text);
        } else {
            $('.sidebar-menu__title').html('导航'+'<span class="glyphicon fr glyphicon-remove" aria-hidden="true" style="margin-top: 14px;"></span>');
        }
        $('.sidebar-menu__title').show();
        $('ul.sidebar-menu__list').css("top","49px");
        $('ul.sidebar-menu__list.newlist').css("top","0px");
    });



});

$(function(){
    new WOW().init();

    $('.banner-nav>li').on('mouseenter',function(){
        $(this).css('background','#999');
        var index1=$(this).index();
        $('.nav-left').css('display','block');
        $('.nav-left').find('.nav-course').eq(index1).css('display','block').siblings().css('display','none');
    });
    $('.banner-nav>li').on('mouseleave',function(){
        $(this).css('background','transparent');
    });

    $('.index-banner').on('mouseleave',function(){
        $('.nav-left').css('display','none');
    });
    $('.swiper').on('mouseenter',function(){
        $('.nav-left').css('display','none');
    });
    $('.banner-course').on('mouseenter',function(){
        $('.nav-left').css('display','none');
    });

    // var num=$('.swiper-container .swiper-slide').children().length-2;
    var obj=$('.swiper-container').find('.swiper-slide').eq(1).find('.swiper-img');

    if(obj.length>0){
       var imgSrc=obj[0].src;
       $('.bk').css('backgroundImage','url("'+imgSrc+'")');
    }



    // 头部
    $('.pc-nav li').on('mouseenter',function(){
        $(this).find('.pc-nav-inner').stop().slideDown('fast');
        // $(this).find('.pc-nav-inner').css('borderRadius','8px');
    });
    $('.pc-nav li').on('mouseleave',function(){
        $(this).find('.pc-nav-inner').stop().slideUp('fast');
    });
    $('.weixin').on('mouseenter',function(){
        $(this).find('.ewm').stop().slideDown('fast');
    });
    $('.weixin').on('mouseleave',function(){
        $(this).find('.ewm').stop().slideUp('fast');
    });
    $('.search').on('click',function(){
        $(this).find('input').stop().slideToggle('fast');
    });
    $('.search input').on('click',function(e){
        stopBubble(e);
    });
    $('.training-course').on('mouseenter',function(){
        $(this).css('boxShadow','0 0 30px 0 #d4d4d4');
    });
    $('.training-course').on('mouseleave',function(){
        $(this).css('boxShadow','0 0 10px -5px #d4d4d4');
    });

    $('.about-tab').on('mouseenter',function(){
        $(this).css('borderLeft','2px solid #e60012');
    });
    $('.about-tab').on('mouseleave',function(){
        $(this).css('borderLeft','2px solid #fff');
    });
    // 课程图文
    $('.key-course').on('click',function(){
        $(this).find('ul').slideToggle();
        if($(this).find('span').hasClass('rot')){
            $(this).find('span').removeClass('rot').addClass('rot1');
        }else{
            $(this).find('span').removeClass('rot1').addClass('rot');
        }
    });
    $('.article-menu').on('click',function(){
        if($('.article-nav').hasClass('article-nav1')){
            $('.article-nav').removeClass('article-nav1').addClass('article-nav2');
        }else{
            $('.article-nav').removeClass('article-nav2').addClass('article-nav1');
        }

        if($('.course-title').hasClass('course-title1')){
            $('.course-title').removeClass('course-title1').addClass('course-title2');

        }else{
            $('.course-title').removeClass('course-title2').addClass('course-title1');
        }

        if($('.course-main').hasClass('course-main1')){
            $('.course-main').removeClass('course-main1').addClass('course-main2');

        }else{
            $('.course-main').removeClass('course-main2').addClass('course-main1');
        }

        if($('.course-bottom1').hasClass('course-bottom1-1')){
            $('.course-bottom1').removeClass('course-bottom1-1').addClass('course-bottom1-2');

        }else{
            $('.course-bottom1').removeClass('course-bottom1-2').addClass('course-bottom1-1');
        }

        if($('.cont').hasClass('cont1')){
            $('.cont').removeClass('cont1').addClass('cont2');

        }else{
            $('.cont').removeClass('cont2').addClass('cont1');
        }

        //图文2
        if($('.continue-study').hasClass('continue-study1')){
            $('.continue-study').removeClass('continue-study1').addClass('continue-study2');

        }else{
            $('.continue-study').removeClass('continue-study2').addClass('continue-study1');
        }
    });

    $('.course-menu').on('click',function(){
        if($('.article-nav').hasClass('article-nav3')){
            $('.article-nav').removeClass('article-nav3').addClass('article-nav4');
        }else{
            $('.article-nav').removeClass('article-nav4').addClass('article-nav3');
        }

        if($('.course-details-title').hasClass('course-title3')){
            $('.course-details-title').removeClass('course-title3').addClass('course-title4');
        }else{
            $('.course-details-title').removeClass('course-title4').addClass('course-title3');
        }

        if($('.course-details-main').hasClass('course-main3')){
            $('.course-details-main').removeClass('course-main3').addClass('course-main4');

        }else{
            $('.course-details-main').removeClass('course-main4').addClass('course-main3');
        }

        if($('.course-bottom1').hasClass('course-bottom1-3')){
            $('.course-bottom1').removeClass('course-bottom1-3').addClass('course-bottom1-4');

        }else{
            $('.course-bottom1').removeClass('course-bottom1-4').addClass('course-bottom1-3');
        }

        if($('.cont').hasClass('cont3')){
            $('.cont').removeClass('cont3').addClass('cont4');
        }else{
            $('.cont').removeClass('cont4').addClass('cont3');
        }
        if($('.course-details-t').hasClass('course-details-t5')){
            $('.course-details-t').removeClass('course-details-t5').addClass('course-details-t6');
        }else{
            $('.course-details-t').removeClass('course-details-t6').addClass('course-details-t5');
        }


    });

    $('.left-content ul li').on('mouseenter',function(){
        $(this).find('a').css('color','#e60012');
        $(this).css('borderLeft','2px solid #e60012');
    });
    $('.left-content ul li').on('mouseleave',function(){
        $(this).find('a').css('color','#000');
        $(this).css('borderLeft','2px solid #eceff1');
    });
    $('.bangding-mb .right button').on('mouseenter',function(){
        $(this).css('background','#e60012');
        $(this).css('color','#fff');
    });
    $('.bangding-mb .right button').on('mouseleave',function(){
        $(this).css('background','#fff');
        $(this).css('color','#e60012');
    });
    $('.swiper-slide .outer').on('mouseenter',function(){
        $(this).css('maxHeight','none');
        $(this).css('background','#fff');
        $(this).css('boxShadow','0 0 10px 5px #eee');
        $(this).css('zIndex','9999');
    });
    $('.swiper-slide .outer').on('mouseleave',function(){
        $(this).css('maxHeight','203px');
        $(this).css('background','#f8fafc');
        $(this).css('boxShadow','none');
        $(this).css('zIndex','100');
    });
    $('.icon1').on('mouseenter',function(){
        $(this).find('p').css('display','block');
    });
    $('.icon1').on('mouseleave',function(){
        $(this).find('p').css('display','none');
    });




    $('.more-it').on('click',function(){
        if($('.it-service').hasClass('it-service1')){
            $('.it-service').removeClass('it-service1').addClass('it-service2');
        }else{
            $('.it-service').removeClass('it-service2').addClass('it-service1');
        }
        if($(this).hasClass('more-it1')){
            $(this).removeClass('more-it1').addClass('more-it2');
        }else{
            $(this).removeClass('more-it2').addClass('more-it1');
        }
        $('.more-it1').text("查看全部内容编排");
        $('.more-it2').text("收起");

    });

    //三级联动
    if($('#distpicker').length>0){
        $('#distpicker').distpicker({
            autoSelect: false
        });
    }



    // $('.swiper-container5').on('mouseenter',function(){
    //     // $(this).css('maxHeight','none');
    //     alert(1);
    // });




});

//首页banner
// $(function(){
//
// });




//阻止冒泡
function stopBubble(e) {
    if(e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
    return false;
}
//首页banner
var swiper = new Swiper('.swiper-container', {
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    on:{
        transitionEnd: function(){
            var index=this.activeIndex;
                 // console.log(index);
                 // console.log($('.swiper-container').find('.swiper-slide').eq(index).find('.swiper-img')[0].src);
            var imgSrc1=$('.swiper-container').find('.swiper-slide').eq(index).find('.swiper-img')[0].src;
            $('.bk').css('backgroundImage','url("'+imgSrc1+'")');
        },
    },
});
var swiper = new Swiper('.swiper-container1', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        //当宽度小于等于767
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },

});

var swiper = new Swiper('.swiper-container2', {
    // loop:true,
    slidesPerView: 8,
    spaceBetween: 50,
    breakpoints: {
        //当宽度小于等于768
        1199: {
            slidesPerView: 8,
            spaceBetween: 33,
        },
        991: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: -10,
        },
    },

});

var swiper = new Swiper('.swiper-container3', {
    // loop:true,
    slidesPerView: 4,
    slidesPerColumn: 2,
    // spaceBetween: 60,
    breakpoints: {
        //当宽度小于等于768
        767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
    },

});
var swiper = new Swiper('.swiper-container4', {
    // loop:true,
    slidesPerView: 6,
    slidesPerColumn: 2,
    // spaceBetween: 60,
    breakpoints: {
        //当宽度小于等于768
        991: {
            slidesPerView: 5,
            slidesPerColumn: 2,
        },
        767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
    },

});
var swiper = new Swiper('.swiper-container5', {
    // loop:true,
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
        //当宽度小于等于768

        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 1,
        },
    },

});
//回到顶部
function goTop(){
    $('html,body').animate({'scrollTop':0},600);
}
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if( t >= 666 ) {
        $('.backtop').css('display','block')
    }else{
        $('.backtop').css('display','none')
    }

    if(t >= 50){
        $('.course-title .title').css('padding','10px 0');
        $('.course-title .title2 .t1').css('padding','8px 15px');
        $('.scroll-none').css('display','none');
    }else{
        $('.course-title .title').css('padding','50px 0 40px');
        $('.course-title .title2 .t1').css('padding','15px');
        $('.scroll-none').css('display','block');
        $('.course-main').css('paddingTop','260px');
    }
}