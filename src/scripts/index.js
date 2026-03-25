document.addEventListener('DOMContentLoaded', () => {
  
  const btnOpen = document.querySelector('.btn--secondary'); // Твоя кнопка "BROWSE BY CATEGORY"
  const popup = document.querySelector('#popup-category');   // Новый ID попапа
  const btnClose = document.querySelector('#close-popup-cat'); // Крестик
  const btnCancel = document.querySelector('#btn-cancel');     // Кнопка CANCEL

  
  if (btnOpen && popup) {
      
      // ОТКРЫТИЕ ПОПАПА
      btnOpen.addEventListener('click', (e) => {
          e.preventDefault(); 
          popup.classList.add('popup--active'); 
          document.body.style.overflow = 'hidden'; 
      });

      // ФУНКЦИЯ ЗАКРЫТИЯ
      const closePopup = () => {
          popup.classList.remove('popup--active'); 
          document.body.style.overflow = 'auto'; 
      };

      // ЗАКРЫТИЕ (по клику на крестик или на кнопку CANCEL)
      if (btnClose) btnClose.addEventListener('click', closePopup);
      if (btnCancel) btnCancel.addEventListener('click', closePopup);
      
      // Доп: Закрытие при клике на желтый фон (overlay)
      const overlay = popup.querySelector('.popup__overlay');
      if (overlay) overlay.addEventListener('click', closePopup);

  } else {
      
      console.error("Ошибка: Проверь, что у кнопки есть класс .btn--secondary, а у попапа ID #popup-category");
  }
});