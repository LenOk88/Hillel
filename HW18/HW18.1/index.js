const timerInput = document.getElementById('timerInput');
const startButton = document.getElementById('startButton');
const timerContainer = document.getElementById('timerContainer');

function createTimer(duration) {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';

    let remainingTime = duration;
    let intervalId = null;

    const timeDisplay = document.createElement('span');
    const startBtn = document.createElement('button');
    const stopBtn = document.createElement('button');

    startBtn.textContent = 'Start';
    stopBtn.textContent = 'Stop';

    function updateDisplay() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (intervalId) return;
        intervalId = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateDisplay();
            } else {
                clearInterval(intervalId);
                intervalId = null;
                timeDisplay.textContent = 'Час вийшов!';
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    updateDisplay();
    timerElement.appendChild(timeDisplay);
    timerElement.appendChild(startBtn);
    timerElement.appendChild(stopBtn);
    timerContainer.appendChild(timerElement);
}

startButton.addEventListener('click', () => {
    const duration = parseInt(timerInput.value, 10);
    if (!isNaN(duration) && duration > 0) {
        createTimer(duration);
        timerInput.value = '';
    } else {
        alert('Будь ласка, введіть коректний час!');
    }
});