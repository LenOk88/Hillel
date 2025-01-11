let ladder = {
    step: 0,

    up: function () {
        this.step++;
        return this;
    },

    down: function () {
        if (this.step > 0) {
            this.step--;
        } else {
            console.log("Нельзя спуститься ниже первого уровня!");
        }
        return this;
    },

    showStep: function () {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); 

