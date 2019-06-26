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


$('.btn-cancel').on('click', function(){
    $('.search-modal').hide('fast');
})

$('.over-modal').on('click', function(){
    $('.search-modal').hide('fast');
})

$('.btn-search-mobile').on('click', function(){
    $('.search-modal').show('fast')
})


$('.form-login input').keyup(function(){
    var wrap = $(this).parent();
    var myValue = $(this).val();
    
    if(myValue.length != 0){
        wrap.addClass('item-focus');
    }else{
        wrap.removeClass('item-focus');
    }  
})

$('.form-signup input').keyup(function(){
    var wrap = $(this).parent();
    var myValue = $(this).val();
    
    if(myValue.length != 0){
        wrap.addClass('item-focus');
    }else{
        wrap.removeClass('item-focus');
    }  
})

$('.form-recover input').keyup(function(){
    var wrap = $(this).parent();
    var myValue = $(this).val();
    
    if(myValue.length != 0){
        wrap.addClass('item-focus');
    }else{
        wrap.removeClass('item-focus');
    }  
})

$('.authen a').on('click', function(){
    var authen = $(this).parent();
    authen.removeClass('authen').addClass('authen-input');
})

$('.btn-mobile-category').on('click', function(){
    var rel = $(this).attr('rel');
    if(rel == 'open'){
        $('.browse .main').show('fast');
        $(this).attr('rel','close');
    }else{
        $('.browse .main').hide('fast');
        $(this).attr('rel','open');
    }
})
