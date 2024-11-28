
$(document).ready(()=>{
    const updateSliderCounter =(current, total)=>{
        current = current < 10 ? "0" + current : current;
        total = total < 10 ? "0" + total : total;
        $(".slick-review-counter").text(current+"/"+total)

    };

    const $slickReview = $("#slick-review")

    $slickReview.on("init", function (ev, slick){
        updateSliderCounter(slick.slickCurrentSlide() + 1, slick.slideCount);
    })


    $slickReview.slick({
        dots: false,
        prevArrow: '',
        nextArrow: '',
    })

    $slickReview.on('afterChange', function (ev, slick){
        updateSliderCounter(slick.slickCurrentSlide()+1, slick.slideCount);
    })

    $(".review-arrow-prev").click(function (){
        $("#slick-review").slick("slickPrev")
    })
    $(".review-arrow-next").click(function (){
        $("#slick-review").slick("slickNext")
    })
    $('.panel-btn').click(function (){
        const t = $(this).parents(".panel");
        t.toggleClass("panel_open")
        t.toggleClass("panel_close")
        t.children(".panel-body").slideToggle(400)
    })
    $('#slick-customers-first').slick({
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: ``,
        prevArrow: ``,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('#slick-customers-second').slick({
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3250,
        nextArrow: ``,
        prevArrow: ``,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



})