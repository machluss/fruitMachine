class Draw {
    constructor() {
        const _colors = ['red', 'green', 'blue'];

        this.randomColors = () => {
            const colors = [];
            for (let i = 0; i < _colors.length; i++) {
                const color = _colors[Math.floor(Math.random() * _colors.length)];
                colors.push(color);
            }
            return colors;
        }
    }
}