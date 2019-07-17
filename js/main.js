function searchFocus() {
    $('.suggestion-results').show();
}

function searchBlur() {
    $('.suggestion-results').hide();
}

function searchKeyUp() {
    var value = $('.action-search').val();
    if (value.length == 0) {
        $('.suggestion-results').show();
    } else {
        $('.suggestion-results').hide();
    }
}

$('.btn-menu-mobile').on('click', function () {
    var status = $(this).attr('rel');
    if (status == 'open') {
        $(this).removeClass('change-open').addClass('change-close').attr('rel', 'close');
        $('.menu-mobile').show('fast');
    } else {
        $(this).removeClass('change-close').addClass('change-open').attr('rel', 'open');
        $('.menu-mobile').hide('fast');
    }
})


$('.btn-cancel').on('click', function () {
    $('.search-modal').hide('fast');
})

$('.over-modal').on('click', function () {
    $('.search-modal').hide('fast');
})

$('.btn-search-mobile').on('click', function () {
    $('.search-modal').show('fast')
})


$('.form-login input').keyup(function () {
    var wrap = $(this).parent();
    var myValue = $(this).val();

    if (myValue.length != 0) {
        wrap.addClass('item-focus');
    } else {
        wrap.removeClass('item-focus');
    }
})

$('.form-signup input').keyup(function () {
    var wrap = $(this).parent();
    var myValue = $(this).val();

    if (myValue.length != 0) {
        wrap.addClass('item-focus');
    } else {
        wrap.removeClass('item-focus');
    }
})

$('.form-recover input').keyup(function () {
    var wrap = $(this).parent();
    var myValue = $(this).val();

    if (myValue.length != 0) {
        wrap.addClass('item-focus');
    } else {
        wrap.removeClass('item-focus');
    }
})

$('.authen a').on('click', function () {
    var authen = $(this).parent();
    authen.removeClass('authen').addClass('authen-input');
})

$('.btn-mobile-category').on('click', function () {
    var rel = $(this).attr('rel');
    if (rel == 'open') {
        $('.browse .main').show('fast');
        $(this).attr('rel', 'close');
    } else {
        $('.browse .main').hide('fast');
        $(this).attr('rel', 'open');
    }
})

$('.a-btn-edit').on('click', function () {
    var actions = $(this).parent();
    var item = actions.parent();
    $(this).hide();
    actions.find('.a-btn-cancel').show();
    item.find('.popup-cart').show().css('display', ' flex');
})

$('.a-btn-cancel').on('click', function () {
    var actions = $(this).parent();
    var item = actions.parent();
    $(this).hide();
    actions.find('.a-btn-edit').show();
    item.find('.popup-cart').hide();
})

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
    $('footer').each(function () {
        if ($(this).isInViewport()) {
            $('.collapse-button').removeClass('fixed');
        } else {
            $('.collapse-button').addClass('fixed');
        }
    });
});

$('.button-name').on('click', function(){
    var role = $(this).attr('role');
    var wrapsite = $(this).parent().parent();
    if(role == 'open'){
        $(this).attr("role","close")
        wrapsite.addClass("mini-width");
    }else{
        $(this).attr("role","open");
        wrapsite.removeClass("mini-width");
    }
})
