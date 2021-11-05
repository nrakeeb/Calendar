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

$(".saveBtn").on("click", saveData);

// save to local storage
function saveData(event) {
    var text = $(event.target).siblings(".description").val();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, text);
    loadData();
}

// read from local storage
function loadData() {
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}