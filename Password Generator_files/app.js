$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var $header = $('.navbar-autohide'),
        scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset =  50;

    $(window).on('scroll', function(){
        if (!scrolling) {
            scrolling = true

            if (!window.requestAnimationFrame) {
                setTimeout(autoHideHeader, 250)
            }
            else {
                requestAnimationFrame(autoHideHeader)
            }
        }
    })

    function autoHideHeader() {
        var currentTop = $(window).scrollTop()

        // Scrolling up
        if (previousTop - currentTop > scrollDelta) {
            $header.removeClass('is-hidden')
        }
        else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            // Scrolling down
            $header.addClass('is-hidden')
        }

        previousTop = currentTop
        scrolling = false
    }

    if($("#october-plugin").length > 0)
    {
        $.request('onOctoProducts');
    }

});