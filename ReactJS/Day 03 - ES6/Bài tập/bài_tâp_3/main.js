class Infor{
    constructor(name,describe){
        this.name = name;
        this.describe = describe;
    }
    static tripple(value = 1){
        return value*3;
    }
}

class Geometry extends Infor {
    constructor(width,describe,name = 'hinh tron'){
        super(name,describe)
        this.width = width;
    }
    caculator(num =1) {
        return num;
    }
}

var geometry = new Geometry(10, 'net lien');

console.log(Geometry.tripple(3));