document.addEventListener('DOMContentLoaded', () => {
    
  
    const btnOpenCat = document.querySelector('.btn--secondary'); // Кнопка BROWSE
    const popupCat = document.querySelector('#popup-category');
    const btnCloseCat = document.querySelector('#close-popup-cat');
    const btnCancelCat = document.querySelector('#btn-cancel');

    if (btnOpenCat && popupCat) {
        btnOpenCat.addEventListener('click', (e) => {
            e.preventDefault();
            popupCat.classList.add('popup--active');
            document.body.style.overflow = 'hidden';
        });

        const closeCat = () => {
            popupCat.classList.remove('popup--active');
            document.body.style.overflow = 'auto';
        };

        if (btnCloseCat) btnCloseCat.addEventListener('click', closeCat);
        if (btnCancelCat) btnCancelCat.addEventListener('click', closeCat);
        const overlayCat = popupCat.querySelector('.popup__overlay');
        if (overlayCat) overlayCat.addEventListener('click', closeCat);
    }

   
    const btnOpenProfile = document.querySelector('.btn--primary'); // Кнопка START QUIZ
    const popupProfile = document.querySelector('#popup-profile');
    const btnCloseProfile = document.querySelector('#close-popup-profile');
    
    if (btnOpenProfile && popupProfile) {
        btnOpenProfile.addEventListener('click', (e) => {
            e.preventDefault();
            popupProfile.classList.add('popup--active');
            document.body.style.overflow = 'hidden';
        });

        const closeProfile = () => {
            popupProfile.classList.remove('popup--active');
            document.body.style.overflow = 'auto';
        };

        if (btnCloseProfile) btnCloseProfile.addEventListener('click', closeProfile);
        const overlayProfile = popupProfile.querySelector('.popup__overlay');
        if (overlayProfile) overlayProfile.addEventListener('click', closeProfile);
    }
});