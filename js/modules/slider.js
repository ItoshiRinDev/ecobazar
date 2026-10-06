import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'


export const Slider = {
    init() {
        return new Swiper('.ct-slider', {
            loop: true,
            slidesPerView: 3,
            slidesPerGroup: 3,
            

            navigation: {
                nextEl: '.ct-arrow-btn.next',
                prevEl: '.ct-arrow-btn.prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 24,
                }
            }
            
        });
    }
};


