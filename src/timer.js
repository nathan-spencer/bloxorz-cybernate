var currentLevel = 1;

function setCurrentLevel(levelNumber) {
  currentLevel = levelNumber;
  let current_level_row = document.getElementById(`stage${currentLevel}`);
  if (current_level_row)
    current_level_row.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
}
var startTime = new Date();
var times = [];

function ResetTimer() {
  startTime = new Date();
  times = [];
  for (let i = 1; i <= 33; i++) {
    times.push({ stage: i, time: 0 });
  }
  UpdateTable();
}

var cancelTimerToken;

function StartTimer() {
  cancelTimerToken = window.setInterval(UpdateTable, 3);
}

function AddStageByLevel(level) {
  clearInterval(cancelTimerToken);
  times.find((s) => s.stage == level).time = new Date() - startTime;
  StartTimer();
}

function UpdateTable() {
  var html = times
    .map((t) => {
      var time = "-";
      if (t.stage == currentLevel)
        time = FormatDuration(new Date() - startTime);
      else if (t.time != 0) time = FormatDuration(t.time);
      return `<tr id='stage${t.stage}'><td>${t.stage}</td><td>${time}</td></tr>`;
    })
    .join("");

  document.getElementById("timeRows").innerHTML = html;
}

function pad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function FormatDuration(diff) {
  // var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // diff -=  days * (1000 * 60 * 60 * 24);

  // var hours = Math.floor(diff / (1000 * 60 * 60));
  // diff -= hours * (1000 * 60 * 60);

  var mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);

  var seconds = Math.floor(diff / 1000);
  diff -= seconds * 1000;

  //00:00.000
  return `${pad(mins, 2)}:${pad(seconds, 2)}.${pad(diff, 3)}`;
}
