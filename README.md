Тестовое задание React
Создать React приложение для получения и отображения списка стран.
Для быстрого поиска в вашем репозитории назовите проект EverneticaTestApp

1. В начале страници расположить поле поиска и кнопку сброса поиска -- Checked!
2. Ниже- список карточек Стран, который формируется , когда пользователь начинает вводить текст в поле поиска (список обновляется после изменения поля поиска). -- Checked!
3. Элементы карточки
   • текст на карточке: название страны и код страны -- Checked!
   
   • На карточке , при наведении , появляются два активных элемента: чекбокс и кнопка удаления -- Checked!
   
   • если нажать на чекбокс, то эта карточка становиться привязанной и при изменении критериев поиска(сброса) удаляться не будет. После изменения критериев поиска привязаные страны остаются в начале списка и не удаляются -- Checked!
   
   • Пр нажатии на кнопку удаления карточка удаляется из списка -- Checked!
   
4. По клику по карточке осуществляется переход на страницу деталей страны. После перезагрузки страницы деталей - она не должна быть пустой
5
   • рядом с названием страны должна быть иконка привязана эта страна или нет (передать состояние через Redux) -- Checked!
   
Доп задание
5. Можно изменять порядок карточек перетягиванием (drag-and-drop) -- Checked!

Требования

1.  Использовать функциональные компоненты и React Hooks -- Checked!
2.Для реализации элементов использовать
    • MaterialUI -- Somehow checked (not a lot)?!
    • Styled Components -- Somehow checked?!
3.  Для управлением глобальным состоянием - redux -- Checked!
4.  Для получения списка можно использовать любую библиотеку или API-services , 
      как альтернатива https://restcountries.eu/ -- Checked!
6.  Для навигации react-router-dom -- Checked!
7.  Не использовать LocalStorage -- Checked!
8.  Задание выполнить в ветке develop и создать merge request в master -- Checked!
