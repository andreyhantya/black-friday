window.onload = function () {
    let animationElements = document.querySelectorAll('[data-animation]');
    let particles_down = document.querySelector('.particles_down');
    let particles_up = document.querySelector('.particles_up');
    let balls_down = document.querySelector('.balls_down');
    let balls_up = document.querySelector('.balls_up');
    let start = document.querySelector('.black_bgc');
    document.querySelector('.page-content').style.paddingBottom = 0;

    if (window.screen.width > 1120) {
        start.classList.add('black-bgc-hide');
        startAnimation();

        window.addEventListener('scroll', () => moveElements());
    } else {
        animationElements.forEach((elem) => {
            elem.removeAttribute('data-animation');
        });
    }

    function moveElements() {
        if (pageYOffset < 3000) {
            particles_up.style.backgroundPositionY = `-${pageYOffset / 3}px`;
            particles_down.style.backgroundPositionY = `${pageYOffset / 3}px`;
            balls_up.style.backgroundPositionY = `${pageYOffset / 4}px`;
            balls_down.style.backgroundPositionY = `-${pageYOffset / 2}px`;
        }
    }
    function startAnimation() {
        let animate = document.querySelectorAll('.animate');

        animationElements.forEach((elem) => {
            elem.style.transitionDuration = '3s';
            elem.removeAttribute('data-animation');
        });

        animate.forEach((elem) => (elem.style.transitionDuration = '0'));
    }
};
