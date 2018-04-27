$(function() {

    $('.btn-login').click(function() {

        $('.enter').toggleClass('open');
        $(this).toggleClass('active');
    });

    $('#id_profession, #id_age').select2({
        minimumResultsForSearch:1/0
    });

});
