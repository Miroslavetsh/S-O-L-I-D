// Open Close Principle

class Shape {
    area() {
        throw new Error('Area method should be implementedemented')
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.type = 'rectangle'
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.type = 'square'
        this.size = size
    }

    area() {
        return this.size**2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.type = 'circle'
        this.radius = radius
    }

    area() {
        return Math.PI * (this.radius**2)
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(16),
    new Circle(7),
    new Square(78),
    new Rectangle(78, 56),
    new Triangle(10, 16),
])

console.log(calc.sum())