$(document).ready(function(){
    // gam
    $(".gam").click(function () {
        $(".gam_menu").addClass("gam_active");
        console.log("click");
    });
    $(".krest").click(function () {
        $(".gam_menu").removeClass("gam_active");
        console.log("clickkrest");
    });

    // accept form

    $(".btn").click(function(event){
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Спасибо!',
            text: 'Мы приняли ваше обращение.',
          })    
    });
    $(".otz_btn").click(function(event){
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Спасибо!',
            text: 'Мы приняли ваш отзыв.',
          })    
    });
    
    // index
    $(".point").mouseover("[data=help]",function() {
        $("#"+$(this).data("help")).addClass("active");
    })
    .mouseout(function() {
        $(".block_hide").removeClass("active");
    });

    // call
    $(".call, .contact_call").click(function(event){
        event.preventDefault();
        $(".back_call").addClass("active_mod");
    });
    $(".close_btn_call").click(function(event){
        event.preventDefault();
        $(".back_call").removeClass("active_mod");
    });

    // join/registration
    $(".join").click(function(event){
        event.preventDefault();
        $(".log_reg").addClass("active_mod");
        $(".log_form").removeClass("log_reg_none");
        $(".reg_form").addClass("log_reg_none");

        $(".enter").addClass("btn_active");
        $(".registration").removeClass("btn_active");
    });
    $(".reg").click(function(event){
        event.preventDefault();
        $(".log_reg").addClass("active_mod");
        $(".log_form").addClass("log_reg_none");
        $(".reg_form").removeClass("log_reg_none");

        $(".enter").removeClass("btn_active");
        $(".registration").addClass("btn_active");
    });
    $(".close_btn").click(function(event){
        event.preventDefault();
        $(".log_reg").removeClass("active_mod");
        $(".reg_form").addClass("log_reg_none");
        $(".log_form").addClass("log_reg_none");
    });

    $(".registration").click(function(event){
        event.preventDefault();
        $(".log_form").addClass("log_reg_none");
        $(".reg_form").removeClass("log_reg_none");
        
        $(".enter").removeClass("btn_active");
        $(".registration").addClass("btn_active");
    });
    $(".enter").click(function(event){
        event.preventDefault();
        $(".log_form").removeClass("log_reg_none");
        $(".reg_form").addClass("log_reg_none");

        $(".enter").addClass("btn_active");
        $(".registration").removeClass("btn_active");
    });

    // settings acc
    $(".self").click(function(event){
        event.preventDefault();
        $(".cont_settings").addClass("active_block");
        $(".change_password").removeClass("active_block");
        $(".self").addClass("active_setting");
        $(".change_pass").removeClass("active_setting");
    });
    $(".change_pass").click(function(event){
        event.preventDefault();
        $(".cont_settings").removeClass("active_block");
        $(".change_password").addClass("active_block");
        $(".self").removeClass("active_setting");
        $(".change_pass").addClass("active_setting");
    });

    // orders
    $(".type_orders").click(function(event){
        event.preventDefault();
        // if (!$(".list." + $(this).children().attr("id")).hasClass("active_list")) {
        //     $(".list").removeClass("active_list");
        //     $(".list." + $(this).children().attr("id")).addClass("active_list");
        // }
        if (!$(this).hasClass("active_order")) {
            $(".type_orders").removeClass("active_order");
            $(this).addClass("active_order");
        }
    });


    // slider 1
    if (document.querySelector('.carousel') != null) {
        new Glider(document.querySelector('.carousel'), {
            draggable: true,
            arrows: {
                prev: '.left',
                next: '.right'
            }
        })
    }

    // sale slider
    if (document.querySelector('.item_carousel') != null) {
        new Glider(document.querySelector('.item_carousel'), {
            slidesToShow: 'auto',
            slidesToScroll:'auto',
            itemWidth: 450,
            draggable: true,
            arrows: {
                prev: '.bottom_arrow_l',
                next: '.bottom_arrow_r'
            }
        })
    }
    
    // feed slider
    if (document.querySelector('.items_feed') != null) {
        new Glider(document.querySelector('.items_feed'), {
            slidesToShow: 'auto',
            itemWidth: 543,
            slidesToScroll: 'auto',
            draggable: true
        })
    }
    // rec_product slider
    if (document.querySelector('.rec_product') != null) {
        new Glider(document.querySelector('.rec_product'), {
            slidesToShow: 'auto',
            itemWidth: 423,
            slidesToScroll: 'auto',
            draggable: true,
            arrows: {
                prev: '.left_rec',
                next: '.right_rec'
            }
        })
    }
    // photos_card slider
    if (document.querySelector('.carousel_card') != null) {
        new Glider(document.querySelector('.carousel_card'), {
            slidesToShow: 'auto',
            itemWidth: 90,
            slidesToScroll: 'auto',
            draggable: true
        })
    }
    
    
    // window 1530
    if ($(window).width() <= 1530) {
        // card_info slider
        if (document.querySelector('.up_content') != null) {
            new Glider(document.querySelector('.up_content'), {
                slidesToShow: 'auto',
                itemWidth: 320,
                slidesToScroll: 'auto',
                draggable: true,
                arrows: {
                    prev: '.left_info',
                    next: '.right_info'
                }
            })
        }
    }
    // window 1280
    if ($(window).width() <= 1280) {
        // header search
        $(".search").appendTo(".future_search");
        
        // slider order buttons
        if (document.querySelector('.categories') != null) {
            new Glider(document.querySelector('.categories'), {
                slidesToShow: 'auto',
                itemWidth: 300,
                slidesToScroll: 'auto',
                draggable: true,
                arrows: {
                    prev: '.left_cat',
                    next: '.right_cat'
                }
            })
        }
    }

    // window 1130
    if ($(window).width() <= 1130) {
        $(".information ul, .productions ul").hide(); // Скрою открытые
        $(".information .block_head, .productions .block_head").click( function(event){
            event.preventDefault();
            if ($(this).next().is(":hidden")) {
                $(this).next().show("slow");
                $('img', this).addClass("rotate");
            }
            else {
                $(this).next().hide("slow");
                $('img', this).removeClass("rotate");
            }
        });

        // slider buttons sale
        if (document.querySelector('.btn_caregories') != null) {
            new Glider(document.querySelector('.btn_caregories'), {
                slidesToShow: 4.5,
                slidesToScroll: 4.5,
                draggable: true
            })
        }
        
    }
    
    // window 910
    if ($(window).width() <= 910) {
        // slider galery
        if (document.querySelector('.photos') != null) {
            new Glider(document.querySelector('.photos'), {
                slidesToShow: 1.2,
                draggable: true,
                arrows: {
                    prev: '.left_photos',
                    next: '.right_photos'
                }
            })
        }
        
    }

    // window 750
    if ($(window).width() <= 750) {
        // header basket
        $(".basket_cash").appendTo(".future_basket");
        if (document.querySelector('.categories_basket') != null) {
            new Glider(document.querySelector('.categories_basket'), {
                slidesToShow: 'auto',
                slidesToScroll:'auto',
                itemWidth: 190,
                draggable: true,
                arrows: {
                    prev: '.left_ord',
                    next: '.right_ord'
                }
            })
        }
    }

    // window 610
    if ($(window).width() <= 610) {
        // acc slider
        if (document.querySelector('.txt_settings') != null) {
            new Glider(document.querySelector('.txt_settings'), {
                slidesToShow: 'auto',
                slidesToScroll:'auto',
                itemWidth: 400,
                draggable: true,
                arrows: {
                    prev: '.left_settings',
                    next: '.right_settings'
                }
            })
        }
    }
    


    // slow scroll
    $("nav, .information ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});