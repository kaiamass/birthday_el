// Находим все кнопки перехода
const buttons = document.querySelectorAll(".next-btn");

// Для каждой кнопки добавляем действие
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Узнаём, на какую страницу нужно перейти
        const nextPage = button.dataset.next;

        // Скрываем все страницы
        const allPages = document.querySelectorAll(".page");

        allPages.forEach(function(page) {
            page.classList.remove("active");
        });

        // Показываем нужную страницу
        const pageToShow = document.getElementById("page" + nextPage);

        if (pageToShow) {
            pageToShow.classList.add("active");
        }

        // Прокручиваем экран наверх
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});