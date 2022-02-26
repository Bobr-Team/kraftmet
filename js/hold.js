$(document).ready(function () {
    $(document).on( 'scroll', function(){
        if ($(window).width() > 1210) {
            var scroll = $(window).scrollTop();
            if (scroll >= 300 && scroll < 1000) {
                $(".right_details").addClass("fixed");
                $(".right_details").removeClass("down_fixed");
            }
            else if (scroll >= 900) {
                $(".right_details").addClass("down_fixed");
                $(".right_details").removeClass("fixed");
            }
            else {
                $(".right_details").removeClass("fixed");
                $(".right_details").removeClass("down_fixed");
            }
        }
        else {
            $(".right_details").removeClass("fixed");
            $(".right_details").removeClass("down_fixed");
        }
    });
});