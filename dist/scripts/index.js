document.addEventListener('DOMContentLoaded', () => {
  // 1. Находим элементы (проверь, что классы и ID совпадают с HTML)
  const btnOpen = document.querySelector('.btn--secondary'); // Твоя кнопка "BROWSE BY CATEGORY"
  const popup = document.querySelector('#popup-category');   // Новый ID попапа
  const btnClose = document.querySelector('#close-popup-cat'); // Крестик
  const btnCancel = document.querySelector('#btn-cancel');     // Кнопка CANCEL

  // 2. Проверяем, что кнопка и попап существуют, чтобы не было ошибок в консоли
  if (btnOpen && popup) {
      
      // ОТКРЫТИЕ ПОПАПА
      btnOpen.addEventListener('click', (e) => {
          e.preventDefault(); // Чтобы страница не дергалась вверх
          popup.classList.add('popup--active'); // Добавляем класс видимости
          document.body.style.overflow = 'hidden'; // Запрещаем скролл сайта под окном
      });

      // ФУНКЦИЯ ЗАКРЫТИЯ
      const closePopup = () => {
          popup.classList.remove('popup--active'); // Убираем класс видимости
          document.body.style.overflow = 'auto'; // Возвращаем скролл сайта
      };

      // ЗАКРЫТИЕ (по клику на крестик или на кнопку CANCEL)
      if (btnClose) btnClose.addEventListener('click', closePopup);
      if (btnCancel) btnCancel.addEventListener('click', closePopup);
      
      // Доп: Закрытие при клике на желтый фон (overlay)
      const overlay = popup.querySelector('.popup__overlay');
      if (overlay) overlay.addEventListener('click', closePopup);

  } else {
      // Если что-то не нашлось, скрипт напишет об этом в консоль (F12)
      console.error("Ошибка: Проверь, что у кнопки есть класс .btn--secondary, а у попапа ID #popup-category");
  }
});