const timeEl = $("#currentDay");
const saveButtons = $("button");
const timeBlocks = $(".time-block");

var today = moment();

var currentTime = today.format("H");
currentTime = parseInt(currentTime);

timeEl.text(today.format("dddd, MMMM Do"));