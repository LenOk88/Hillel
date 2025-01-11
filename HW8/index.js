let ladder = {
    step: 0,

    up: () => {
        ladder.step++;
        return ladder;
    },

    down: () => {
        if (ladder.step > 0) {
            ladder.step--;
        } else {
            console.log("Нельзя спуститься ниже первого уровня!");
        }
        return ladder;
    },

    showStep: () => {
        console.log(ladder.step);
        return ladder;
    }
};

ladder.up().up().down().showStep(); 
