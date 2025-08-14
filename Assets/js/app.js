console.log("JS Loaded");

AOS.init();

let date = new Date();
console.log(date);

formatDate = {
    "weekday":`long`,
    "month":`long`,
    "year" : `numeric`,
    "day" : `numeric`
}

let currentDate = date.toLocaleDateString("en-US",formatDate);
// document.getElementById("date").innerText = currentDate;
console.log(currentDate);

let currentTime=date.toLocaleTimeString();
console.log(currentTime);

document.getElementById("local-date").innerText = currentDate;
document.getElementById("local-time").innerText = currentTime;

