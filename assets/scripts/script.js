const timeEl = $("#currentDay");
const saveButtons = $("button");
const timeBlocks = $(".time-block");

var today = moment();

var currentTime = today.format("H");
currentTime = parseInt(currentTime);

timeEl.text(today.format("dddd, MMMM Do"));

// change colour of time boxes depending on current time
function checkColour() {
    for (var i = 0; i < timeBlocks.length; i++) {
        if (timeBlocks[i].id < currentTime) {
            timeBlocks[i].classList.add("past");
        }
        else if (timeBlocks[i].id == currentTime) {
            timeBlocks[i].classList.add("present");
        }
        else {
            timeBlocks[i].classList.add("future");
        }
    }
}