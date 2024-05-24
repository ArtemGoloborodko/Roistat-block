document.addEventListener("DOMContentLoaded", function () {
    // Создаем элемент для курсора
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-dot');
    document.body.appendChild(cursor);

    // Обновляем позицию курсора при движении мыши
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    // Убираем курсор при уходе мыши с окна
    document.addEventListener('mouseleave', function () {
        cursor.style.display = 'none';
    });

    // Возвращаем курсор при возвращении мыши в окно
    document.addEventListener('mouseenter', function () {
        cursor.style.display = 'block';
    });


    

    let swiper = new Swiper(".mySwiper", {
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        on: {
            init: function () {
                updateSlidesClasses(this);
            },
            slideChange: function () {
                updateSlidesClasses(this);
            }
        },  breakpoints: {
           
            980: {
              slidesPerView: 3,
            },
         
            320: {
              slidesPerView: 1,
            }
          }
    });
    
    function updateSlidesClasses(swiper) {
        swiper.slides.forEach((slide, index) => {
            if (index === 2) {
                slide.classList.add('active-slide');
                slide.classList.remove('inactive-slide');
            } else {
                slide.classList.remove('active-slide');
                slide.classList.add('inactive-slide');
            }
        });
    }
    
    
});

