const dropdownCon = document.querySelector('.dropdown-contact')


dropdownCon.onclick = function(){
    document.onclick = function(e) {
        if (!dropdownCon.contains(e.target)) {
            dropdownCon.classList.remove('active')
        }
    }
    dropdownCon.classList.toggle('active')
}

$(document).ready(() => {
    $('.slideshow').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $('.slideshow .slick-prev').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.slideshow .slick-next').html('<i class="fa-solid fa-chevron-right"></i>')
    $('.slideshow .slick-dots li').html('')
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > this.scrollY) {
        navbar.classList.add('hidden-nav');
    } else {
        navbar.classList.remove('hidden-nav');
    }
});

