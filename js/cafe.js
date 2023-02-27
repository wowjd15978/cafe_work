$(function(){
    //검색
    $('.search-select').click(function(){
    const dp = $('.search-sbox').css("display"); //search-sbox 의 display 값을 받아다가 변수 dp 에 저장한다.
        if(dp == "none"){ //dp 값이 none 일 때 와 block 일 때를 구분한다.
            //none 이라면 아래 화살표를 지우고 위에 화살표를 넣는다.
            $('.selectbox').find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up') 
            //search-box 를 display block 으로 바꾼다
            $('.search-sbox').show();
        }else{
            // none 과 반대의 처리를 한다
            $('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down')
            $('.search-sbox').hide();
        }

    });
    $('.search-sbox>a').click(function(e){
        e.preventDefault();
        const txt = $(this).text();
        $('.search-select').text(txt);
        $('.search-sbox').hide();
        $('.selectbox').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('#selectbox').val(txt);
        $('#searchtext').focus();
    });

    $('.hero li').mouseenter(function(){
        $('.hero li').removeClass('active');
        $(this).addClass('active');
    });

    //슬라이드 쇼
    setInterval(mySlide, 1300);

    

}); //jqurey

function mySlide(){
    const eq0 = $('.hero .new:eq(0)'); //이야기 하나
    const eq1 = $('.hero .new:eq(1)'); //이야기 둘
    eq1.addClass('zindex').css('opacity', 0).animate({'opacity' : 1}, 1300, function(){ //animate 를 통해 두번째 이야기에 zindex 를 추가하고 제일 앞에 보이게 하며 투명처리
        eq1.find('li').eq(ranDomList()).addClass('active');
        eq0.removeClass('zindex');
        eq0.find('li').removeClass('active');
        $('.hero').append(eq0);
        
    });
};

function ranDomList(){
    return Math.floor(Math.random() * 4);
};