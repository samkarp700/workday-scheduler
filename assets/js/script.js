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
var currentTime = moment().format("h:mm:ss a");


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
    nineEl.val(getEvent9);
    var getEvent10 = JSON.parse(localStorage.getItem("10:00 A.M."));
    tenEl.val(getEvent10);
    var getEvent11 = JSON.parse(localStorage.getItem("11:00 A.M."));
    elevenEl.val(getEvent11);
    var getEvent12 = JSON.parse(localStorage.getItem("12:00 P.M."));
    twelveEl.val(getEvent12);
    var getEvent1 = JSON.parse(localStorage.getItem("1:00 P.M."));
    oneEl.val(getEvent1);
    var getEvent2 = JSON.parse(localStorage.getItem("2:00 P.M."));
    twoEl.val(getEvent2);
    var getEvent3 = JSON.parse(localStorage.getItem("3:00 P.M."));
    threeEl.val(getEvent3);
    var getEvent4 = JSON.parse(localStorage.getItem("4:00 P.M."));
    fourEl.val(getEvent4);
    var getEvent5 = JSON.parse(localStorage.getItem("5:00 P.M."));
    fiveEl.val(getEvent5);
}

//rows change color based on past/present/future time
    //get the element for timeslot 
    
    // if time is greater than time block, then this is considered "past", therefore add class "past"
    
    
    //else if time is less than timeblock, then this is considered the future, therefore add class "future"

    //finally, else if is not less than, not greater than = present. add class "present"



$(document).ready(function() {
    loadEvents();
})