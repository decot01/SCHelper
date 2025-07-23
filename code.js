document.addEventListener("DOMContentLoaded", function() {
    // Получаем контейнеры
    const GunList = document.querySelector('.GunList');
    const ArmorList = document.querySelector('.ArmorList');
    const ClanList = document.querySelector('.ClanList');
    const ArtList = document.querySelector('.ArtList');

    // Функция для показа соответствующего контейнера
    window.show = function(type) {
        // Скрываем все
        GunList.style.display = 'none';
        ArmorList.style.display = 'none';
        ClanList.style.display = 'none';
        ArtList.style.display = 'none';

        // Показываем выбранный контейнер
        switch(type) {
            case 'gun':
                GunList.style.display = 'flex';
                break;
            case 'armor':
                ArmorList.style.display = 'flex';
                break;
            case 'clan':
                ClanList.style.display = 'flex';
                break;
            case 'art':
                ArtList.style.display = 'flex';
                break;
        }

        console.log("log-type:" + type);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.addEventListener('click', function(event) {
        // Предотвращаем всплытие клика до document,
        // чтобы не снять выделение сразу после установки
        event.stopPropagation();
        // Проверяем, является ли текущий элемент уже выбранным
        if (this.classList.contains('selected')) {
          // Если уже выбран, снимаем выделение
          this.classList.remove('selected');
        } else {
          // Если не выбран, снимаем выделение со всех остальных элементов
          items.forEach(i => i.classList.remove('selected'));
          // И добавляем выделение к текущему элементу
          this.classList.add('selected');
        }
      });
    });
    // Добавляем обработчик клика на весь документ
    document.addEventListener('click', function(event) {
      // Если клик произошел не по элементу с классом 'item'
      // (это уже обработано event.stopPropagation() выше)
      // и если клик не был внутри .tools контейнера (опционально, но хорошая практика)
      // то снимаем выделение со всех элементов
      if (!event.target.closest('.tools')) { // Проверяем, что клик не был внутри контейнера .tools
        items.forEach(i => i.classList.remove('selected'));
      }
    });
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const colorTool = document.querySelector('.colorTool');
    const colorFillArea = document.querySelector('.colorTool .color-fill-area'); // Получаем область для заливки
    const colorContextMenu = document.createElement('div');
    colorContextMenu.className = 'color-context-menu';
    const colors = ['blue', 'orange', 'green', 'red'];
    colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${color}`;
        colorOption.dataset.color = color;
        colorContextMenu.appendChild(colorOption);
    });
    document.body.appendChild(colorContextMenu);
    if (colorTool && colorFillArea) { // Убедимся, что обе части найдены
        colorTool.addEventListener('click', function(e) {
            e.preventDefault();
            colorContextMenu.style.display = 'block';
            const menuHeight = colorContextMenu.offsetHeight;
            colorContextMenu.style.left = e.pageX + 'px';
            colorContextMenu.style.top = (e.pageY - menuHeight) + 'px';
        });
    } else {
        console.error("Элемент с классом 'colorTool' или 'color-fill-area' не найден. Убедитесь, что HTML правильно структурирован.");
    }
    document.addEventListener('click', function(e) {
        if (colorContextMenu.style.display === 'block' && !colorContextMenu.contains(e.target) && e.target !== colorTool) {
            colorContextMenu.style.display = 'none';
        }
    });
    colorContextMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('color-option')) {
            const selectedColor = e.target.dataset.color;
            colorFillArea.style.backgroundColor = selectedColor;
            colorContextMenu.style.display = 'none';
        }
    });
});