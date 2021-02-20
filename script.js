function tabs(headerSelector, tabsSelector, contentSelector, activeClass, display = 'block') {
    const header = document.querySelector(headerSelector),  //получаем значения через селекторы
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

        function hideTabContent() {  //скрываем весь контент и убираем у табов класс активности
            content.forEach(elem => {
                elem.style.display = "none";
            });

            tabs.forEach(elem => {
                elem.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {  //показываем первый контент и таб i параметр по умолчанию
            content[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        hideTabContent(); //убираем все
        showTabContent(); //показываем 1 контент

        header.addEventListener('click', (e) => { //обработчик события
            const target = e.target;
            if(target.classList.contains(tabsSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))) { //удаляем с помощью регулярок точку в классе и проверяем клик элемента, что он относится к табселектору, если в табе есть еще элементы
                tabs.forEach((elem, i) => { //в какой элементы произошел клик и вытаскиваем из него номер i
                    if (target == elem || target.parentNode == elem) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
}

tabs('.header', '.header-tab', '.tabcontent', 'active');