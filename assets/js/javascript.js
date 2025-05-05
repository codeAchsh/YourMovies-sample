var output = $('.about'); 

console.log('output is OK');

$(document).ready(function(){
    // Jquery Methods go

    $(function(){
        //DEFAULT = 1st view
        $('.tabcontent').hide();
        $('#home').show();

        // buttons
        $('#home-btn').click(function(){
            $('.tabcontent').hide();
            $('#home').show();
        });
        $('#latest-btn').click(function(){
            $('.tabcontent').hide();
            $('#latest').show();
        });
        $('#past-btn').click(function(){
            $('.tabcontent').hide();
            $('#past').show();
        });
        $('#more-btn').click(function(){
            $('.tabcontent').hide();
            $('#more').show();
        });
    });
    // SEARCH BUTTON
    $(function(){
        // TRIGGER
        $('button').filter('#search').click(function(){
            open();
        });
        $('#close').click(function(){
            close();
        });

        // FUNCTION
        function open(){
            $('#modal').fadeIn('slow');
            $('.modal-wrapper').animate({
                top: 0,
                opacity: 1
            },'slow');
        }

        function close(){
            $('#modal').fadeOut('slow');
            $('.modal-wrapper').animate({
                top: '-300px',
                opacity: 0
            },3000);
        }
    });




    
        //auto slider
        let slideWidth;
    let slideCount;
    let autoSlideInterval;

    function initSlider() {
        slideWidth = $('#slider ul li').outerWidth(); // outerWidth()でpadding込み
        slideCount = $('#slider ul li').length;

        // 初期位置設定：1つ目の<li>が表示されるように
        $('#slider ul').css({
            width: slideWidth * slideCount + 'px',
            marginLeft: 0 // 初期位置を0に設定
        });

        console.log('Slider initialized');
    }

    function moveLeft() {
        $('#slider ul').animate({
            left: '+=' + slideWidth
        }, 1000, function() {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', -slideWidth + 'px');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: '-=' + slideWidth
        }, 1000, function() {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', -slideWidth + 'px');
        });
    }

    // 自動スライダー ON/OFF
    $('#checkbox').change(function() {
        if ($(this).is(':checked')) {
            autoSlideInterval = setInterval(moveRight, 3000);
            console.log('Auto slider started');
        } else {
            clearInterval(autoSlideInterval);
            console.log('Auto slider stopped');
        }
    });

    // 手動操作
    $('a.control-prev').click(function(e) {
        e.preventDefault();
        moveLeft();
        console.log('Prev button clicked');
    });

    $('a.control-next').click(function(e) {
        e.preventDefault();
        moveRight();
        console.log('Next button clicked');
    });

    // ウィンドウロードとリサイズ時にスライダー初期化
    $(window).on('load resize', function() {
        initSlider();
    });
    
});

