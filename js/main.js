let slideShow = $('.slide-show');
let slideCount = $('.single-slide').length;
let slideWidth = 100 / slideCount;
let slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');

slideShow.find('.single-slide').each(function(index){
    $(this).css({
    'width': slideWidth + '%',
    'margin-left': index * slideWidth + '%'    
    });
});

$('.prev-slide').click(function(){
    slide(slideIndex - 1);
});

$('.next-slide').click(function(){
    slide(slideIndex + 1);
});


function slide(newSlideIndex){
    if(newSlideIndex < 0 || newSlideIndex > slideCount -1){
        return;
    }
    
    let slideCaption = $('.slide-caption').eq(newSlideIndex);
    let marginLeft = newSlideIndex * (-100) + '%';
    slideCaption.hide();
    slideShow.animate({
        'margin-left': marginLeft
    }, 800, function(){
       slideIndex = newSlideIndex;
        slideCaption.fadeIn();
    });
}

