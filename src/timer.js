var currentLevel = 1;
var TOTAL_STAGES = 33;
var tableInitialized = false;
var stageTimeCells = [];
var currentLevelCell = null;
var timerActive = false;
var pausedElapsed = 0;

function setCurrentLevel(levelNumber) {
  currentLevel = levelNumber;
  currentLevelCell = stageTimeCells[currentLevel] || null;
  let current_level_row = document.getElementById(`stage${currentLevel}`);
  if (current_level_row)
    current_level_row.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  if (timerActive) {
    UpdateTable();
  }
}
var startTime = Date.now();
var times = [];

function EnsureTable() {
  if (tableInitialized) return;

  var timeRows = document.getElementById("timeRows");
  if (!timeRows) return;

  var html = "";
  for (let i = 1; i <= TOTAL_STAGES; i++) {
    html += `<tr id='stage${i}'><td>${i}</td><td id='stage${i}time'>-</td></tr>`;
  }

  timeRows.innerHTML = html;

  for (let i = 1; i <= TOTAL_STAGES; i++) {
    stageTimeCells[i] = document.getElementById(`stage${i}time`);
  }

  tableInitialized = true;
  currentLevelCell = stageTimeCells[currentLevel] || null;
}

function ResetTimer() {
  startTime = Date.now();
  times = [];
  timerActive = false;
  pausedElapsed = 0;

  EnsureTable();

  for (let i = 1; i <= TOTAL_STAGES; i++) {
    times[i] = 0;
    if (stageTimeCells[i]) {
      stageTimeCells[i].textContent = "-";
    }
  }

  currentLevelCell = stageTimeCells[currentLevel] || null;
  UpdateTable();
}

var cancelTimerToken;

function StartTimer() {
  pausedElapsed = 0;
  timerActive = true;
  clearInterval(cancelTimerToken);
  cancelTimerToken = window.setInterval(UpdateTable, 50);
}

function PauseTimer() {
  if (!timerActive) {
    return;
  }

  pausedElapsed = Date.now() - startTime;
  timerActive = false;
  clearInterval(cancelTimerToken);
  cancelTimerToken = null;
}

function ResumeTimer() {
  if (timerActive) {
    return;
  }

  startTime = Date.now() - pausedElapsed;
  timerActive = true;
  clearInterval(cancelTimerToken);
  cancelTimerToken = window.setInterval(UpdateTable, 50);
  UpdateTable();
}

function RestartTimerForCurrentStage() {
  pausedElapsed = 0;
  startTime = Date.now();
  timerActive = true;
  clearInterval(cancelTimerToken);
  cancelTimerToken = window.setInterval(UpdateTable, 50);
  UpdateTable();
}

function AddStageByLevel(level) {
  clearInterval(cancelTimerToken);
  cancelTimerToken = null;

  var elapsed = Date.now() - startTime;
  times[level] = elapsed;

  if (stageTimeCells[level]) {
    stageTimeCells[level].textContent = FormatDuration(elapsed);
  }

  StartTimer();
}

function UpdateTable() {
  if (!tableInitialized) {
    EnsureTable();
  }

  if (!timerActive) {
    return;
  }

  if (!currentLevelCell) {
    currentLevelCell = stageTimeCells[currentLevel] || null;
  }

  if (!currentLevelCell) return;

  currentLevelCell.textContent = FormatDuration(Date.now() - startTime);
}

function pad(num, places) {
  return String(num).padStart(places, "0");
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
