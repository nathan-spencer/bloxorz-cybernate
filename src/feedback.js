var split = false;
var stageLoaded = false;
var movesReceived = 0;

function setSplit(value) {
    split = !!value;
}

function setStageLoaded(value) {
    stageLoaded = value;
}

function updateMovesReceived() {
    movesReceived++;
}

function LogFrame(frame) {
    //initial drop
    //if (220 <= frame && frame <= 224) { 
    if (frame === 223) {
        setStageLoaded(1);
    };
    //final drop
    //if (359 <= frame && frame <= 366) {
    if (frame === 366) {
        setStageLoaded(0);
        //Timer ends on completing the last stage for the category (first frame where block is not visible underground)
        AddStageByLevel(currentLevel);
    }
    //splitting
    if (!split && (frame === 367 || frame === 521)) {
        setSplit(1);
    };
}