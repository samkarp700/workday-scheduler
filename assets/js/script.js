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
$("#button .saveBtn").click(function(){
    console.log("button was clicked");
    //once clicked, siblings method grabs input of form-control
    $("input").on(function() {
        var eventInput = $(this).val();
        $("form-control").text(eventInput);
        console.log(eventInput);
    })
    
});
//     // select text from form-control at hour of event
//     var currentHour = $(this).siblings(".input-group-prepend").text().trim();
//     //save to local storage
//     localStorage.setItem(currentHour, JSON.stringify(eventInput));
// });

//rows change color based on past/present/future time



