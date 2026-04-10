
export class Calendar {
  constructor(className) {
    this.className = className;
  }
  createCalendar(year, month,className) {
    let date = new Date();
    const months = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ];

    let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    // Создаем календарь
    let calendar = document.createElement("div");
    calendar.classList.add(`${this.className}`);
    document.body.appendChild(calendar);
    // Шапка календаря
    let calendarHeader = document.createElement("div");
    calendar.appendChild(calendarHeader);
    calendarHeader.classList.add(`${this.className}__header`);
    // Блок с месяцем и годом в шапке
    let calendarHeaderDate = document.createElement("span");
    calendarHeaderDate.classList.add(`${this.className}__date`);
    calendarHeader.appendChild(calendarHeaderDate);
    calendarHeaderDate.textContent = `${months[month]} ${year}`;
    // Блок с кнопками переключения в шапке
    let calendarBtns = document.createElement("div");
    calendarBtns.classList.add(`${this.className}__btns`);
    calendarHeader.appendChild(calendarBtns);
    // Добавляем кнопки переключения
    let btnPrev = document.createElement("button");
    btnPrev.classList.add(`${this.className}__btn--prev`);
    btnPrev.textContent = "prev";
    // Добавляем кнопки в блок кнопок
    calendarBtns.appendChild(btnPrev);
    let btnNext = document.createElement("button");
    btnNext.classList.add(`${this.className}__btn--next`);
    btnNext.textContent = "next";
    calendarBtns.appendChild(btnNext);
    // Создаем блок с днями недели
    let weekdays = document.createElement("div");
    weekdays.classList.add(`${this.className}__weekdays`);
    calendar.appendChild(weekdays);
    // Создаем ячейки для названий дней недели
    for (let i = 0; i < daysOfWeek.length; i++) {
      let weekday = document.createElement("span");
      weekday.classList.add(`${this.className}__weekday`)
      weekdays.appendChild(weekday);
      weekday.textContent += daysOfWeek[i];
    }
    // Вешаем клик на кнопки для переключения
    btnPrev.addEventListener("click", () => {
      if (month === 0) {
        month = 11;
        year--;
      } else {
        month--;
      }
      calendar.remove();
      this.createCalendar(year, month, this.className);
    });

    btnNext.addEventListener("click", () => {
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      calendar.remove();
      this.createCalendar(year, month, this.className);
    });

    // Создаем блок к днями месяца
    let days = document.createElement("div");
    days.classList.add(`${this.className}__days`);
    calendar.appendChild(days);

    // Первый день месяца
    let firstDay = new Date(year, month, 1).getDay();
    // Количество дней в месяце
    let dayInMonth = new Date(year, month + 1, 0).getDate();

    // Добавляем пустые дни для выравнивания
    for (let i = 1; i < firstDay; i++) {
      let emptyDay = document.createElement("span");
      emptyDay.classList.add(`${this.className}__day--empty`);
      days.appendChild(emptyDay);
    }
    // Добавляем дни месяца
    for (let i = 1; i <= dayInMonth; i++) {
      let day = document.createElement("span");
      day.classList.add(`${this.className}__day`);
      days.appendChild(day);
      day.textContent = i;
      // Выделяем текущий день
      if (year === year && month === month && i === date.getDate()) {
        day.classList.add(`${this.className}__day--current`);
      }
    }
  }
}
