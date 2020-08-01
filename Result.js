class Result {
    static checkResult(colors) {
        if (colors[0] === colors[1] && colors[0] === colors[2] || colors[0] !== colors[1] && colors[1] !== colors[2] && colors[0] !== colors[2]) return 'win'
        return 'loss';
    }
}