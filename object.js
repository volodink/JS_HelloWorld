
import Square from './square.js';


class Application extends Square {
    constructor() {
        super();
        this.lst = [];
    }
    generateSquares() {
        let square = null;
        for (let squareCnt = 0; squareCnt < 25; squareCnt++) {
            square = new Square(squareCnt);
            this.getId();
            this.getHeight();
            this.getWidth();
            this.getSize();
            this.getBackground();
            this.lst.push(square);
            console.log(square.getId());
        }
    }
}
console.log(Square);

const app = new Application()
app.generateSquares();
console.log(app);
