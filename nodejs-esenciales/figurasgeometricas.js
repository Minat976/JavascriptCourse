class FiguraGeometrica {
    constructor(base,altura){
        this.base = base;
        this.altura= altura;
    }
}

class Triangulo extends FiguraGeometrica{
   calculaArea(){
       return (this.base * this.altura)/2;
   }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        this.lado= lado;
    }

    calculaArea(){
        return this.lado * this.lado
    }
}

class Rectangulo extends FiguraGeometrica{
    calculaArea(){
        return this.base * this.altura
    }
}

var cuadrado1 = new Cuadrado();
console.log(cuadrado1.calculaArea());
var rectangulo1 = new Rectangulo(3,5);
console.log(rectangulo1.calculaArea());
var triangulo1 = new Triangulo(5,14);
console.log(triangulo1.calculaArea());