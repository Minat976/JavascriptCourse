class Animal {
    constructor(categoria){
        this.categoria = categoria;
    }
}

class CuentaBancaria {
    constructor(saldo) {
        this.saldo =saldo;
    }
    
   deposito(cantidad){
        this.saldo +- cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

class TarjetaDeCredito extends CuentaBancaria{
    constructor(s=0,t='TC',[c="xx/xx/xx"],pm=0){
        super(s,t);
        this.fechaDeCorte= fc;
        this.pagoMinimo = pm;
    }

    imprimeFechaDeCorte(){
        console.log(`La fecha de corte es: ${this.fechaDeCorte}`);

    }

    imprimeFechaDeCorte(){
        console.log(`El pago minimo es: ${this.pagoMinimo}`);
        
    }
}

var main = function() {
    let perro = new Animal('perro');
    let gato= new Animal('gato');
    console.log(perro.categoria);
    console.log(gato.categoria);


    let cuenta1= new CuentaBancaria(5000, 'M');
    cuenta1.deposito(2000);
    cuenta1.retiro(4000);
    console.log(cuenta1.saldo);

    let cuenta2 =new CuentaBancaria(1000, 'E');
    let cuenta3 =new CuentaBancaria();

}

main();