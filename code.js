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

        event.stopPropagation();

        if (this.classList.contains('selected')) {
          // Если уже выбран, снимаем выделение
          this.classList.remove('selected');
        } else {

          items.forEach(i => i.classList.remove('selected'));

          this.classList.add('selected');
        }
      });
    });

    document.addEventListener('click', function(event) {

      if (!event.target.closest('.tools')) {
        items.forEach(i => i.classList.remove('selected'));
      }
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const colorTool = document.querySelector('.colorTool');
    const colorFillArea = document.querySelector('.colorTool .color-fill-area');
    const colorContextMenu = document.createElement('div');
    colorContextMenu.className = 'color-context-menu';
    const colors = ['blue', 'orange', 'red', 'green'];
    colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${color}`;
        colorOption.dataset.color = color;
        colorContextMenu.appendChild(colorOption);
    });
    document.body.appendChild(colorContextMenu);
    if (colorTool && colorFillArea) {
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