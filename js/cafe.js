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
    let slide = setInterval(mySlide, 13000);

    $('.next').click(function(){
        clearInterval(slide);
        mySlide();
        slide();
        setInterval(mySlide, 13000);
    });
    
    $('.prev').click(function(){
        clearInterval(slide);
        prevEvent();
        setInterval(mySlide, 13000);
    });
    
    mytime();


    //데이터 가져오기

    jQuery.ajax({
        type:"GET",
        url: "./date/data.json",
        dataType: "JSON",
        success: function(data){
            let list = '';
            for(let i = 0; i < data.cafelist.length; i++){
                list +='<li><a herf=# class="d-flex align-items-center justify-content-between">';
                list +='<div class="tbox d-flex align-items-center">';
                list +='<img src="'+data.cafelist[i].img+'"alt="'+data.cafelist[i].num+'">';
                list +='<h1>1</h1><p class="ellipise">'+data.cafelist[i].content+'</p></div>';
                list +='<div class="cfe d-flex"><p class="ellipise">'+data.cafelist[i].cafename+'</p><p class="dg">'+data.cafelist[i].cafename+'</p></div>';
                list += '</a></li>';
            }
            $('.clist').html(list);
        },
        error:function(xhr, status, error){
            console.log(error);
        } 
    });
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

function prevEvent(){
    $('.new:first-child').removeClass('zindex');
    $('.new:last-child').addClass('zindex').clone().prependTo('.hero').end();
    $('.new:last-child').remove();
}

function mytime(){
    let dt = new Date();
    let y = dt.getFullYear();
    let m = dt.getMonth()+1;
    let d = dt.getDay();
    let h = dt.getHours();
    let mm = dt.getMinutes();
    
    let mt = `${y}.${m}.${d}.<strong>${h}.${mm}</strong>`;

    $('.thetime').html(mt);
}