class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    // getDurationInput = () => {
    //     return parseFloat(this.durationInput.value);
    // };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    // setDurationInput = time => {
    //     this.durationInput.value = time;
    // };

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }

        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    };
}
