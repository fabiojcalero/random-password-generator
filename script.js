const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rootEl = document.documentElement;
let themeToggleBtn = document.getElementById("theme-toggle-btn");
let moonIconEl = document.getElementById("moon-icon");
let sunIconEl = document.getElementById("sun-icon");
let leftPasswordBtn = document.getElementById("first-postulate");
let rightPasswordBtn = document.getElementById("second-postulate");

let passwordLength = 15;


function toggleTheme() {
    if (rootEl.getAttribute("data-theme") === "dark") {
        rootEl.setAttribute("data-theme", "light");
        sunIconEl.setAttribute("display", "none");
        moonIconEl.setAttribute("display", "inline");
    } else {
        rootEl.setAttribute("data-theme", "dark");
        sunIconEl.setAttribute("display", "inline");
        moonIconEl.setAttribute("display", "none");
    }
}


function displayGeneratedPasswords() {
    leftPasswordBtn.textContent = generatePassword();
    rightPasswordBtn.textContent = generatePassword();
}


function generatePassword() {
    let randomIndex;
    let password = "";
    for (let i = 0; i < 15; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
