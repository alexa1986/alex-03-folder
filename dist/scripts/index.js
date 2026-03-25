document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ВСЕ МОДАЛЬНЫЕ ОКНА ---
    const popupCat = document.querySelector('#popup-category');
    const popupProfile = document.querySelector('#popup-profile');
    const popupQuiz = document.querySelector('#popup-quiz');

    // --- 2. КНОПКИ ОТКРЫТИЯ ---
    // Кнопка "Browse" на главной
    const btnOpenCat = document.querySelector('.btn--secondary'); 
    // Кнопка "Start Quiz" в Hero (открывает Профиль)
    const btnOpenProfile = document.querySelector('.hero .btn--primary');
    // Ссылка "Quiz" в шапке (Header) — ищем по тексту или href
    const btnHeaderQuiz = document.querySelector('header a[href*="quiz"]') || document.querySelector('.nav__link--quiz');
    // Кнопка "Start Quiz" внутри Профиля (ведет в Квиз)
    const btnStartFinal = document.querySelector('#start-game-btn');

    // --- 3. ОБЩИЕ ФУНКЦИИ ---
    const openModal = (modal) => {
        if (!modal) return;
        modal.classList.add('popup--active');
        document.body.style.overflow = 'hidden';
    };

    const closeAllModals = () => {
        [popupCat, popupProfile, popupQuiz].forEach(modal => {
            if (modal) modal.classList.remove('popup--active');
        });
        document.body.style.overflow = 'auto';
    };

    // --- 4. ЛОГИКА КЛИКОВ ---

    // Открыть Категории
    if (btnOpenCat) {
        btnOpenCat.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(popupCat);
        });
    }

    // Открыть Профиль из Hero
    if (btnOpenProfile) {
        btnOpenProfile.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(popupProfile);
        });
    }

   
    function openQuizWithDelay() {
        setTimeout(() => openModal(popupQuiz), 100);
    }

    // --- 5. ЗАКРЫТИЕ ---
    // Слушаем все клики по крестикам и кнопкам отмены
    document.querySelectorAll('.popup__close, #btn-cancel, #close-popup-quiz').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
        });
    });

    // Закрытие по клику на фон (оверлей)
    document.querySelectorAll('.popup__overlay').forEach(overlay => {
        overlay.addEventListener('click', closeAllModals);
    });

    // --- 6. ИНТЕРАКТИВ ВНУТРИ КВИЗА ---
    const quizOptions = document.querySelectorAll('.quiz-option');
    const submitBtn = document.querySelector('.quiz-submit');

    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Убираем активный класс у всех соседей
            quizOptions.forEach(opt => opt.classList.remove('quiz-option--active'));
            // Добавляем текущему
            option.classList.add('quiz-option--active');
            
            // Активируем кнопку Submit
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.background = '#000';
                submitBtn.style.color = '#fff';
                submitBtn.style.cursor = 'pointer';
                submitBtn.style.border = '3px solid #000';
            }
        });
    });
});