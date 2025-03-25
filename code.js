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