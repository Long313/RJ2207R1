class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getArea() {
        return this.width*this.height;
    }
    getPerimeter() {
        return (this.width+this.height)*2;
    }
}
var rectangle = new Rectangle(20,10);

console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
