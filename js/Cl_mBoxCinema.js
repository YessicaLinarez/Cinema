export default class Cl_mBoxCinema {
    constructor({dineroInicial}) {
        this.mayor = 0,0;
        this.auxNombre = "";
        this.acumMontoPagar = 0.0;
        this.contFamilia = 0;
        this.dineroInicial = dineroInicial;
        this.acumMontoPagarT = 0;
        this.acumPersonasLunes = 0;
    }

    set dineroInicial(d){
        this._dineroInicial = +d;
    }
    
    get dineroInicial(){
        return this._dineroInicial;
    }


    procesarFamilia(familia) {

        this.acumMontoPagarT += familia.montoPagar();

    if (familia.dia == 1){
        this.acumMontoPagar += familia.montoPagar();
        this.contFamilia++;
        this.acumPersonasLunes+= familia.cantidadP;
    }   

    if (familia.montoPagar() > this.mayor) {
     this.mayor = familia.montoPagar();
     this.auxNombre = familia.nombre;
    }

 }
    devolverAuxNombre() {
        return this.auxNombre;
    }

    promedioPagadoLunes() {
        return this.acumMontoPagar / this.contFamilia;
    }
    dineroTotalCaja(){
        return this.dineroInicial + this.acumMontoPagarT;
    }

    devolverAcumPersonasLunes(){
        return this.acumPersonasLunes;
    }

    devolverAcumMontoPagart(){
        return this.acumMontoPagarT;
    }

    porcentajeEntradaCaja(){
        return (this.acumMontoPagarT / this.dineroInicial) * 100
    }
}
