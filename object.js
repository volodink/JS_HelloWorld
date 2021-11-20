// const user = {
//     name: "Pudge",
//     hp: 10000,
//     "Likes birds": true
// };
// user.isAdmin = true;
// //alert(user.hp);
// //alert(user.name)
// // delete user.hp;
// user.name = "Viper";
// user.hp = 2000
// user.weight = 100;
//
// console.log(user);
//
//
// let stringif = JSON.stringify(user);
// console.log(stringif);
//
// let parse = JSON.parse(stringif)
// console.log(parse);
//
// //alert(user.hp);
// //alert(user.name);
//
// let lst = [];
//
// console.log(lst);
//
// for (i = 0; i < 3; i++) {
//     lst.push({
//         game: {
//             name: faker.name.findName(),
//             address: faker.address.streetAddress(),
//         }
//     });
// }

// console.log(lst);
//
// C = document.getElementById("application")
//
// function getStyleString(color, margin_top, margin_left) {
//     return `background-color: #${color}; width: 100px; height: 100px; position: absolute; margin-top: ${margin_top}px; margin-left: ${margin_left}px;`;
// }
//
// for (i = 0; i < 10; i++) {
//     let box = document.createElement('div');
//     box.setAttribute('id', i + 1);
//
//     let rnd_value = Math.round(Math.random() * 16777215).toString(16);
//
//     let color = rnd_value;
//     let margin_top = (Math.round(Math.random() * i + 1) * Math.round(Math.random() * i + 1)) * 15;
//     let margin_left = (Math.round(Math.random() * i + 1) * Math.round(Math.random() * i + 1)) * 15;
//     console.log(margin_top, margin_left);
//     let style_text = getStyleString(color, margin_top, margin_left);
//
//     box.setAttribute("style", style_text);
//     C.append(box)
//     console.log(box)
//
// }

//var canvas = document.getElementById('canvas');
// //console.log(canvas.width,canvas.height);
//canvas.width = 600;
//canvas.height = 600;
//var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.lineWidth = 5;
// ctx.moveTo(canvas.width / 2, canvas.height / 2);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.height / 2) + 150);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 1.5) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
// ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
// ctx.closePath();


// ctx.fillStyle = "#" + Math.round(Math.random() * 16777215).toString(16);
// ctx.fillRect(0,0,canvas.width,canvas.height);
// ctx.fill();
// ctx.stroke()

//console.log(canvas.width,canvas.height);

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