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
        $('#checkbox').change(function(){
            setInterval(function(){
                moveRight();
            },3600);
            console.log('auto slider OK'); //check OK
        });
    
        //collect height and width
        var slideCount = $('#slider ul li').length;  //3
        var slideHeight = $('#slider ul li').height();  //800
        var slideWidth = $('#slider ul li').width();   //1200
    
        var sliderUlWidth = slideCount * slideWidth; //3600
        //display
        $('#slider').css({
            width: slideWidth + 'px',
            height: slideHeight + 'px'
        });
    
        //container items
        $('#slider ul').css({
            width: sliderUlWidth + 'px',
            marginLeft: -slideWidth + 'px'
        });
        console.log('container items OK');  //check OK
    
        //placement of items
        //prependTo = 各要素内の一番前に指定した要素を追加する
        $('#slider ul li:last-child').prependTo('#slider ul');
    
        console.log('last-child OK');  //check OK
        //functions
        function moveLeft(){
            $('#slider ul').animate({
                left:  '+=' +  slideWidth
            },3000,function(){
                $('#slider ul li:last-child').prependTo('#slider ul');
            });
            $('#slider ul').css('left', '');

            console.log('moveLeft animate OK');  //check
        }
            
        //appendTo = 指定した要素を末尾に追加する
        function moveRight(){
            $('#slider ul').animate({
                left: '-='  + slideWidth
            },3000,function(){
                $('#slider ul li:last-child').appendTo('#slider ul');
            });
            $('#slider ul').css('left', '');

            console.log('moveRight animate OK');  //check
        }
            
        //trigger
        //moveLeft
        $('a.control-prev').hover(function(){
            moveLeft();
            console.log('control-prev hover OK');  //check
        });
        $('a.control-next').click(function(){
            moveRight();
            console.log('control-next click OK');  //check
        });
    
});

