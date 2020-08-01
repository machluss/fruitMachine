class Stats {
    constructor(wins = 0, losses = 0, number = 0) {
        this.wins = wins;
        this.losses = losses
        this.number = number;
    }

    addToStats(result) {
        this.number++;
        if (result === 'win') {
            this.wins++;
        } else if (result === 'loss') {
            this.losses++;
        };
    }

    showStats(that) {
        that.walletDisplay.textContent = `${that.wallet.getWallet()}$`;
        that.winDisplay.textContent = this.wins;
        that.lossDisplay.textContent = this.losses;
        that.numberDisplay.textContent = this.number;
    }
}