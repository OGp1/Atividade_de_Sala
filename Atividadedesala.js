// Figura Geometrica
class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends FiguraGeometrica {
    calcularArea() {
        return this.base * this.altura;
    }
}

class Circulo extends FiguraGeometrica {
    calcularArea() {
        return 3.14 * this.base**2 ;
    }
}

var retanguloexemplo = new Retangulo(10, 20);
console.log("A área do retângulo é: " + retanguloexemplo.calcularArea() + " cm2");

var circuloexemplo = new Circulo(5);
console.log("A área do círculo é: " + circuloexemplo.calcularArea() + " cm2");


// Animal
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal {
    latir() {
        return "Au!";
    }
}

class Gato extends Animal {
    miar() {
        return "Miau!";
    }
}

var Totó = new Cachorro("Totó", "Cachorro");
console.log(Totó.latir());

var Miau = new Gato("Miau", "Gato");
console.log(Miau.miar());
