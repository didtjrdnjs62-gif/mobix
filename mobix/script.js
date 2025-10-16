$(document).ready(function() {
  
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('body').toggleClass('menu-open');
  });
  
  $('.nav-list a').click(function() {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('menu-open');
  });
  
  $('a[href^="#"]').click(function(e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 95
      }, 800);
    }
  });

  const reviews = [
    {
      text: '"데이터 걱정 없이 하루 종일 영상 보고, 통화도 무제한이라 너무 편해요! 이전엔 매달 요금 폭탄 맞았는데,<br>여기 요금제로 바꾸고 나서는 가격도 저렴하고 속도도 빨라서 만족합니다.<br>고객센터 응대도 친절해서 자인들에게 추천하고 있어요."',
      avatar: './img/후기.png'
    },
    {
      text: '"가격 대비 품질이 정말 좋아요! 다른 통신사보다 훨씬 저렴하면서도 속도는 더 빠릅니다.<br>고객센터 상담원분들도 친절하시고, 문제 해결도 빠르게 해주셔서 만족스럽습니다.<br>주변 사람들에게 적극 추천하고 있어요!"',
      avatar: './img/후기.png'
    },
    {
      text: '"무제한 요금제 사용 중인데 정말 제약 없이 마음껏 쓸 수 있어서 좋습니다.<br>영상 스트리밍도 끊김 없고, 게임할 때도 렉 없이 쾌적합니다.<br>이렇게 좋은 서비스를 이 가격에 이용할 수 있다니 감사해요!"',
      avatar: './img/후기.png'
    }
  ];
  
  let currentReview = 0;
  
  function updateReview() {
    $('.review-text').fadeOut(300, function() {
      $(this).html(reviews[currentReview].text).fadeIn(300);
    });
    $('.review-avatar img').fadeOut(300, function() {
      $(this).attr('src', reviews[currentReview].avatar).fadeIn(300);
    });
    $('.review-pagination .dot').removeClass('active').eq(currentReview).addClass('active');
  }
  
  $('.review-pagination .dot').click(function() {
    currentReview = $(this).index();
    updateReview();
  });
  
  setInterval(function() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
  }, 5000);
  
    $('.product-card, .service-card').hover(
    function() {
      $(this).css('transform', 'translateY(-10px)');
    },
    function() {
      $(this).css('transform', 'translateY(0)');
    }
  );
  
});