class Square {
    constructor(id) {
        this.id = id;
        this.width = 1 + (Math.random() % 100 + 50);
        this.height = 1 + (Math.random() % 100 + 50);
        this.size = 100;
        this.background = 'red';
    }
    getId() {
        return this.id;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    getSize() {
        return this.size;
    }
    getBackground() {
        return this.background;
    }
}


export default Square;

// class Square {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
// }
//
// class Box extends Square {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = 10 + 'px';
//         this.$el.style.height = 10 + 'px';
//         this.$el.style.size = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }
//
// const box1 = new Box( {
//      selector: 'canvas',
//      size: 50,
//      color: 'red'
// })