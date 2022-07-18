//Main functions:
//open planner -> current day displayed in jumbotron container 
//time blocks for the day of the week shown - each time block is color coded to past present future
// click into time block - can enter event
//save button saves event to local storage 
//refreshed page - saved event displayed on the page. 

//variables for time slots
var nineEl = $("#9");
var tenEl = $("#10");
var elevenEl = $("#11");
var twelveEl = $("#12");
var oneEl = $("#1");
var twoEl = $("#2");
var threeEl = $("#3");
var fourEl = $("#4");
var fiveEl = $("#5");

//get current day from moment.js
var currentDate = moment().format("[Today is] dddd, MMMM Do YYYY") 

//jumbotron - show current day 
document.getElementById("currentDay").innerHTML = currentDate;


//save button saves event input to local storage

$("#button .saveBtn").click(function(){
    console.log("button was clicked");
    //once clicked, siblings method grabs input of form-control
   var eventInput = $(this).siblings(".form-control")
   .val();
   console.log(eventInput);
//     // select text from form-control at hour of event
    var currentHour = $(this).parent().siblings(".input-group-prepend").text().trim();
    //save to local storage
    console.log(currentHour);
    localStorage.setItem(currentHour, JSON.stringify(eventInput));
});

//load saved events from local storage
var loadEvents = function() {
    var getEvent9 = JSON.parse(localStorage.getItem("9:00 A.M."));
    console.log(getEvent9);
    $("input").val(getEvent9);
    var getEvent10 = JSON.parse(localStorage.getItem("10:00 A.M."));
    var getEvent11 = JSON.parse(localStorage.getItem("11:00 A.M."));
    var getEvent12 = JSON.parse(localStorage.getItem("12:00 P.M."));
    var getEvent1 = JSON.parse(localStorage.getItem("1:00 P.M."));
    var getEvent2 = JSON.parse(localStorage.getItem("2:00 P.M."));
    var getEvent3 = JSON.parse(localStorage.getItem("3:00 P.M."));
    var getEvent4 = JSON.parse(localStorage.getItem("4:00 P.M."));
    var getEvent5 = JSON.parse(localStorage.getItem("5:00 P.M."));
}


//rows change color based on past/present/future time



$(document).ready(function() {
    loadEvents();
})