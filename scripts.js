document.addEventListener('DOMContentLoaded', () => {
    const pcViewButton = document.getElementById('pc-view');
    const mobileViewButton = document.getElementById('mobile-view');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const siteTitle = document.querySelector('title');

    function applyPcStyles() {
        themeStylesheet.href = 'styles.css';
        siteTitle.textContent = 'Выигрыш 100к гривен🤑🤑🤑 (ПК-версия)';
    }

    function applyMobileStyles() {
        themeStylesheet.href = 'mobile-styles.css';
        siteTitle.textContent = 'Выигрыш 100к гривен🤑🤑🤑 (Мобильная версия)';
    }

    function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 34 + 6 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {

        snowflake.remove();
    }, 5000);

    }

    setInterval(createSnowflake, 100);

    // Слушатели переключения
    pcViewButton.addEventListener('click', applyPcStyles);
    mobileViewButton.addEventListener('click', applyMobileStyles);

    // Установить начальное состояние
    if (themeStylesheet.href.includes('mobile-styles.css')) {
        applyMobileStyles();
    } else {
        applyPcStyles();
    }
});
