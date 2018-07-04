$(document).ready(function() {
    var mySwiper = new Swiper(".ban-swiper", {
        loop: true,
        // 如果需要分页器
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            disableOnInteraction: false
        }
    });
});
