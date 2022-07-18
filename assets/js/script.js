//Main functions:
//open planner -> current day displayed in jumbotron container 
//time blocks for the day of the week shown - each time block is color coded to past present future
// click into time block - can enter event
//save button saves event to local storage 
//refreshed page - saved event displayed on the page. 



//get current day from moment.js
var currentDate = moment().format("[Today is] dddd, MMMM Do YYYY") 

//jumbotron - show current day 
document.getElementById("currentDay").innerHTML = currentDate;

//get text from event input


//save button saves event input to local storage


//rows change color based on past/present/future time



