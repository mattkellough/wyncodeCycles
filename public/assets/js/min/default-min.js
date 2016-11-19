$(document).ready(function(){

  function childrenPosition() {
    var slideWidth = 1;
    $('.sliderImages').find('img').each(function() {
      var nextSlide = slideWidth + '00%';
      $(this).next().css('left', nextSlide);
      slideWidth++;
    });
  }

  childrenPosition();

  var sliderListItem = $('.sliderImages img'),
  slideWidth = sliderListItem.width(),
  sliderCount = sliderListItem.length;

  console.log(sliderCount);

  i = 0

  function moveLeft() {
    if (i!==0) {
      sliderListItem.animate({
        left: '+='+slideWidth
      }, 200);
      i--
    }
    console.log(i);
  };

  function moveRight() {
    if (i!==5)  {
      sliderListItem.animate({
        left: '-='+slideWidth
      }, 200);
      i++
    }
    console.log(i);
  };

  $('a.prev').click(function () {
    moveLeft();
    clearInterval(int);
    int = setInterval(moveRight,3000);
    return false;
  });

  $('a.next').click(function () {
    moveRight();
    clearInterval(int);
    int = setInterval(moveRight,3000);
    return false;
  });

  int = setInterval(moveRight,3000);

});


