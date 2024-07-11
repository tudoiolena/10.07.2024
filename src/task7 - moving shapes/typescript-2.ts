// // задание 2
// // - создать html страницу у которой бэкграунд будет канвас
// // - создать класс фигуры (любой) у которой будет XY позиция и размер
// // - метод render который будет рисовать фигуру в канвас и обновлять позицию
// // - в цикле создать 10 экземпляров класса фигуры с рандомной позицией
// // - и заанимировать их используя сетИнтервал
// // - добавить на страницу параграф лорем-50

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const canvasContext = canvas.getContext("2d");

interface Shape {
  x: number;
  y: number;
  size: number;
  color: string;
  render: () => void;
}

interface Movement {
  dx: number;
  dy: number;
}

class CircleShape implements Shape {
  x: number;
  y: number;
  size: number;
  color: string;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  render() {
    canvasContext.beginPath();
    canvasContext.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    canvasContext.fillStyle = this.color;
    canvasContext.fill();
    canvasContext.stroke();
  }
}

function initializeMovement(): Movement {
  const speed = 2;
  return {
    dx: Math.random() * speed,
    dy: Math.random() * speed,
  };
}

function updateElementPosition(movement: Movement, shape: Shape) {
  shape.x += movement.dx;
  shape.y += movement.dy;

  if (shape.x + shape.size > canvas.width || shape.x - shape.size < 0) {
    movement.dx = -movement.dx;
  }

  if (shape.y + shape.size > canvas.height || shape.y - shape.size < 0) {
    movement.dy = -movement.dy;
  }

  shape.render();
}

function createRandomCircle(): CircleShape {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 50 + 20;
  const colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return new CircleShape(x, y, size, color);
}

function createCircleShapes(amount: number = 10): CircleShape[] {
  const shapes = [];
  for (let i = 0; i < amount; i++) {
    shapes.push(createRandomCircle());
  }
  return shapes;
}

function animate(shapes: Shape[], movements: Movement[]): void {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  shapes.forEach((shape, index) =>
    updateElementPosition(movements[index], shape)
  );
}

const shapes = createCircleShapes(10);
const movements = shapes.map(() => initializeMovement());

setInterval(() => animate(shapes, movements), 30);
