class Animal{
    sonar(){
        throw "ete metodo debe ser sobreescrito en las clases hijas";
    }
}

class Perro extends Animal {
    sonar(){
        console.log("el perro hace guau");
    }
}

class Gato extends Animal {
    sonar(){
        console.log("el gato hace miau");
    }
}
function hacerSonar(animal){
    animal.sonar();
}

const perro = new Perro();
const gato = new Gato();

hacerSonar(perro);
hacerSonar(gato);