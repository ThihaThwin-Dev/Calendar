/**
 * this function creats an Array for Calendar Date Names
 * returns the value name weekDays to be used later
 */
function generateWeekdays() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekDays;
}
/**
 * this function is used to paint the Calendar Date Names
 * points to the id which will be used as a parent to append
 * used for loop that uses the length of the array that is called in the parameter
 * sets a node to create div element under the parent
 * add class to the created element to change it to string and to lowercase
 * then inside the created element add the array values from 0 to 6
 * then append the node which is the created element under the parent
 */
function paintDates(weeks) {
  let parent = document.querySelector("#weekDays");
  for (let index = 0; index < weeks.length; index++) {
    let node = document.createElement("div");
    node.classList.add("dayheader", weeks[index].toString().toLowerCase());
    node.innerHTML = weeks[index];
    parent.appendChild(node);
  }
}
/**
 * this function is the same as paintDates function
 * the only difference being add a 1 to the created week class to avoid starting from 0 and causes confusion
 */
function generateRows() {
  let parent = document.getElementById("calendar-numbers");
  for (let index = 0; index < 6; index++) {
    let node = document.createElement("div");
    node.classList.add("week" + (index + 1));
    parent.appendChild(node);
  }
}
/**this function is used to create div's whose class name is day under the 6 rows of the week class
 * uses for loop to lessen the burden of declaraing 6 different week classes by using the looped index
 * then append div classes named day under the assignend parent node
 */
function generateDays() {
  for (let j = 1; j < 7; j++) {
    let parent = document.querySelector(".week" + j);
    for (let index = 0; index < 7; index++) {
      let node = document.createElement("div");
      node.classList.add("day");
      parent.appendChild(node);
    }
  }
}
/**
 * this function is used to clear the days when the show button is clicked while dates are already displayed
 * this prevents the dates from overlapping
 * run the loop to reassgin all the created divs a blank string
 */
function clearDays() {
  let clearDays = document.getElementsByClassName("day");
  for (let index = 0; index < clearDays.length; index++) {
    const element = clearDays[index];
    element.innerHTML = "";
  }
}
/**this function is to paint the entire calendar body if the input month does not exceeded 12
 * else an alert will appear
 * store the values of month and year from the input text boxes
 * uses the stored value to set the Date
 * sets the starting day of 1 to output the calendar days
 * to stop when the date ends this function set the end month to the currently used month + 1 (to signify the skip of a month)
 * then sets that month date as a 0 to get the last day of the current month
 * this way now the function knows which day it will start and ends
 * this is done by using if to see whether the current counting date is less than or equal to the ending date and loops until the condition is fufilled
 * only create divs and class/id names for the used dates other cells are ignored
 * this way we can match the output dates and their unique id for later uses
 */
function calendar() {
  clearDays();
  let showHeader = document.getElementById("calendar-header");
  showHeader.style.display = "block";
  var month = document.getElementById("month-input").value;
  var year = document.getElementById("year-input").value;
  let days = document.getElementsByClassName("day");
  let currentDate = new Date(year + "-" + month);
  currentDate.setDate(1);
  let startDate = currentDate.getDay();
  let countDate = 1;
  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate.setDate(0);
  let endDate = currentDate.getDate();
  if (month <= 12) {
    for (let index = startDate; index < 42; index++) {
      if (countDate <= endDate) {
        let node = document.createElement("div");
        node.setAttribute("id", year + "-" + month + "-" + countDate);
        node.classList.add("event-text");
        let displayNode = document.createElement("div");
        displayNode.classList.add("display-numbers");
        days[index].setAttribute("id", "day" + countDate);
        days[index].style.backgroundColor = "#F3F0E7";
        days[index].style.boxShadow = "5px 5px 1px 1px";
        displayNode.innerHTML = countDate++;
        days[index].appendChild(displayNode);
        days[index].appendChild(node);
      }
    }
  } else {
    alert("This Date unfortunately does not exist!");
  }
}
/**
 * this function is used to add Calendar Events
 * text input and date input values is stored as a variable first
 * extracts the values of month/year/day from inputDate
 * select the day which will be use to find id from the extracted values
 * add text from textInput and changes the background color of the date
 */
function calendarEvent() {
  let textInput = document.getElementById("event-textinput").value;
  var inputDate = new Date(document.getElementById("event-selector").value);
  var month = inputDate.getMonth() + 1;
  var year = inputDate.getFullYear();
  var day = inputDate.getDate();
  let selectDay = document.getElementById(year + "-" + month + "-" + day);
  let setBackground = document.getElementById("day" + day);
  selectDay.innerHTML = textInput;
  setBackground.style.backgroundColor = "#007AFF";
}
/**
 * this function is used to check Zodiac Sign by selecting the date in the calendar
 */
function checkZodiacsign() {
  var date = new Date(document.getElementById("event-selector").value);
  var month = date.toLocaleString("default", { month: "long" }).toLowerCase();
  let astro_sign;
  var day = date.getDate();
  if (month == "december") {
    if (day < 22) astro_sign = "Sagittarius";
    else astro_sign = "Capricorn";
  } else if (month == "january") {
    if (day < 20) astro_sign = "Capricorn";
    else astro_sign = "Aquarius";
  } else if (month == "february") {
    if (day < 19) astro_sign = "Aquarius";
    else astro_sign = "Pisces";
  } else if (month == "march") {
    if (day < 21) astro_sign = "Pisces";
    else astro_sign = "Aries";
  } else if (month == "april") {
    if (day < 20) astro_sign = "Aries";
    else astro_sign = "Taurus";
  } else if (month == "may") {
    if (day < 21) astro_sign = "Taurus";
    else astro_sign = "Gemini";
  } else if (month == "june") {
    if (day < 21) astro_sign = "Gemini";
    else astro_sign = "Cancer";
  } else if (month == "july") {
    if (day < 23) astro_sign = "Cancer";
    else astro_sign = "Leo";
  } else if (month == "august") {
    if (day < 23) astro_sign = "Leo";
    else astro_sign = "Virgo";
  } else if (month == "september") {
    if (day < 23) astro_sign = "Virgo";
    else astro_sign = "Libra";
  } else if (month == "october") {
    if (day < 23) astro_sign = "Libra";
    else astro_sign = "Scorpio";
  } else if (month == "november") {
    if (day < 22) astro_sign = "Scorpio";
    else astro_sign = "Sagittarius";
  }
  alert(astro_sign + " " + "is your Zodiac Sign");
}
/**this function is used to refresh the page */
function reset() {
  location.reload();
}
paintDates(generateWeekdays());
generateRows();
generateDays();

