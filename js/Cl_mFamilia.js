export default class Cl_mFamilia {  
    constructor({nombre, cantidadP, dia,funcion}) {
        this.nombre = nombre;
        this.cantidadP = cantidadP;
        this.dia = dia;
        this.funcion = funcion;
    }

set nombre(n){
    this._nombre = n;
}

get nombre(){
    return this._nombre;
}

set cantidadP(c){
    this._cantidadP = +c;
}

get cantidadP(){
    return this._cantidadP;
}

set dia(d){
    this._dia = +d;
}

get dia(){
    return this._dia;
}

set funcion(f){
    this._funcion = f;
}

get funcion(){
    return this._funcion;
}

entrada(){
    if(this.dia == 1){
        return 1.50;
}
else return 3.00;
}

montoPagar(){
    return this.entrada() * this.cantidadP;
}

funcionM(){
    if(this.dia == 1){
        return "Tarde"}
    else if(this.dia == 2){
            return "Noche"
        }
    else return 0
}
}