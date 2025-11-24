class CuentaBancaria {
    constructor (saldoInicial){
let saldo = saldoInicial;

this.depositar = function(monto) {
    if (monto > 0){
        saldo += monto;
        console.log("Se ha depositado 150$");
    }else {
        console.log("el monto debe ser mayor a 0$")
    }
};
this.mostrarSaldo = function() {
    console.log("El saldo actual es 500$");
};
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.mostrarSaldo();
cuenta.depositar(500);
cuenta.mostrarSaldo();