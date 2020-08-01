class Wallet {
    constructor(walletStart) {
        let _money = walletStart;

        this.getWallet = () => _money;

        this.changeWalletValue = (result, bid) => {
            if (result === 'win') {
                _money += bid * 2;
            } else if (result === 'loss') {
                _money -= bid;
            };
        };

        this.checkCanPlay = (bid) => {
            if (_money >= bid) return true;
            return false;
        }
    }
}