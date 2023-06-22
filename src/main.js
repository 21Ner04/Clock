/*==================== Clock ====================*/
const clock_hour = document.querySelector("#hr")
const clock_minutes = document.querySelector("#mn")
const clock_seconds = document.querySelector("#sc")

setInterval(() => {
let date = new Date();
let hh = date.getHours() * 30;
let mm = date.getMinutes() * 6;
let ss = date.getSeconds() * 6;

clock_hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
clock_minutes.style.transform = `rotateZ(${mm}deg)`;
clock_seconds.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
/*==================== Clock & Data text ====================*/
const textHour = document.getElementById('th');
const textMinutes = document.getElementById('tm');
const textSeconds = document.getElementById('ts');
const textAmPm = document.getElementById('tampm');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');
const clockText = () => {
    let date = new Date();
    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear();
    if (hh >= 12) {
        hh = hh - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
    if (hh == 0) {
        hh = 12;
    }
    if (hh < 10) {
        hh = `0${hh}`;
    }
    textHour.innerHTML = `${hh}:`;
    if (mm < 10) {
        mm = `0${mm}`;
    }
    textMinutes.innerHTML = `${mm}:`;
    if (ss < 10) {
        ss = `0${ss}`;
    }
    textSeconds.innerHTML = ss;
    textAmPm.innerHTML = ampm;
}
setInterval(clockText, 1000)

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.querySelector('.theme-button')
const darkTheme = 'dark-theme'
const iconTheme = '☾'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? '☾' : '☼'

if (selectedTheme) {

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === '☾' ? 'add' : 'remove'](iconTheme)
}

themeButton.name = 'themeLight'
themeButton.addEventListener('click', (event) => {
    const { body } = document
    const allItems = body.querySelectorAll("*")
    console.log("hello")
    if (event.target.name === "themeLight") {
        allItems.forEach(item => { 
            item.style.color = "white"
        })
        body.classList.remove("body-white")
        event.target.name = "themeDark"
        body.classList.add("body-black")
    }
    else {
        allItems.forEach(item => { 
            item.style.color = "black"
        })
        body.classList.remove("body-black")
        event.target.name = "themeLight"
        body.classList.add("body-white")
    }
})
