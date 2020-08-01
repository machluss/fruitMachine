class Game {
    constructor(moneyStart) {
        this.gameAreas = document.querySelectorAll('.color');
        this.bidArea = document.getElementById('bid');

        this.winDisplay = document.querySelector('.win');
        this.numberDisplay = document.querySelector('.number');
        this.lossDisplay = document.querySelector('.loss');
        this.resultDisplay = document.querySelector('.result');
        this.walletDisplay = document.querySelector('.wallet')


        document.querySelector('#start').addEventListener('click', this.startGame.bind(this));

        this.wallet = new Wallet(moneyStart);
        this.stats = new Stats();

        this.stats.showStats(this);
    }

    startGame() {
        if (this.wallet.getWallet() === 0) return alert('Przegrałeś już wszysytko!!!!');
        else if (this.bidArea.value === '' || this.bidArea.value <= 0 || this.bidArea.value === NaN || this.bidArea.value % 1 > 0) return alert('Podałeś niepoprawną wartość');
        const bid = parseInt(this.bidArea.value);
        if (!this.wallet.checkCanPlay(bid)) return alert("Zbyt mało środków");
        const draw = new Draw();
        const drawResult = draw.randomColors();
        const result = Result.checkResult(drawResult);
        this.stats.addToStats(result);
        this.stats.showStats(this);
        this.wallet.changeWalletValue(result, bid);
        this.render(drawResult, bid, result);
        this.bidArea.value = '';
    }

    render(colors, bid, result) {
        this.gameAreas.forEach((area, index) => {
            area.style.backgroundColor = colors[index];
        })
        if (result === 'win') {
            this.resultDisplay.textContent = `Wygrałeś ${bid * 2}$`;
        } else if (result === 'loss') {
            this.resultDisplay.textContent = `Przegrałeś ${bid}$`
        };
        this.walletDisplay.textContent = `${this.wallet.getWallet()}$`;
    }
}