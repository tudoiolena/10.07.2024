// // задание 2
// // - создать html страницу у которой бэкграунд будет канвас
// // - создать класс фигуры (любой) у которой будет XY позиция и размер
// // - метод render который будет рисовать фигуру в канвас и обновлять позицию
// // - в цикле создать 10 экземпляров класса фигуры с рандомной позицией
// // - и заанимировать их используя сетИнтервал
// // - добавить на страницу параграф лорем-50

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

class CircleShape {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.dx = Math.random() * 2;
    this.dy = Math.random() * 2;
  }

  render() {
    canvasContext.beginPath();
    canvasContext.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    canvasContext.fillStyle = this.color;
    canvasContext.fill();
    canvasContext.stroke();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.dy = -this.dy;
    }

    this.render();
  }
}

function createRandomCircle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 50 + 20;
  const colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return new CircleShape(x, y, size, color);
}

function createCircleShapes(amount = 10) {
  const shapes = [];
  for (let i = 0; i < amount; i++) {
    shapes.push(createRandomCircle());
  }
  return shapes;
}

function animate() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  this.forEach((shape) => shape.update());
}

const shapes = createCircleShapes(10);
setInterval(animate.bind(shapes), 30);
