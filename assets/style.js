//variables for each hour of the day in military time
var hour0 = $("#0");
var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var hour6 = $("#6");
var hour7 = $("#7");
var hour8 = $("#8");
var hour9 = $("#0");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");
var hour18 = $("#18");
var hour19 = $("#19");
var hour20 = $("#20");
var hour21 = $("#21");
var hour22 = $("#22");
var hour23 = $("#23");
var time = moment();

function setPlanner() {
//sets the current date and time in the header
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
//function that assigns the current hour to its corresponding ID in the container
    $(".time-block").each(function () {
        var hour = $(this).attr("id");
        var schedule = localStorage.getItem(hour);

        //checking to make sure every hour is displayed, along with the value once typed into the text box
        console.log(hour)
//stores the value of the the schedule to it's parent var hour
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
//allows the user to save typed for the chosen hour
setPlanner();
var saveBtn = $(".saveBtn");
//once clicked its saves to local storage in the dev tools
saveBtn.on("click", function () {
//var time is the key chosen for the hour, planner val is what is typed in the text box
    var time = $(this).parent().attr("id");
    var planner = $(this).siblings(".schedule").val();
//set item is what stores the key and value of the time and planner
    localStorage.setItem(time, planner);
});
//functions which assigns the current hour to its corresponding hour in the planner
function presentTime() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
//statements to determine if the hour is past, present or future
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
// //runs the function to determine actual time to color code each hour of the day
 presentTime();