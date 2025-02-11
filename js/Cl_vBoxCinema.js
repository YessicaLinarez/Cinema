export default class Cl_vBoxCinema { 
    constructor(controlador) {
      this.vista = document.getElementById("mainForm");
      this.tabla = document.getElementById("mainForm_tabla");
     
      this.inDineroInicial = document.getElementById("mainForm_inDineroInicial");
    
      
        this.btAgregar = document.getElementById("mainForm_btAgregar");
      this.lblDevolverAuxNombre = document.getElementById("mainForm_lblDevolverAuxNombre");
      this.lblPromedioPagadoLunes = document.getElementById("mainForm_lblPromedioPagadoLunes");
      this.lblDineroTotalCaja = document.getElementById(  "mainForm_lblDineroTotalCaja");
      this.lblDevolverAcumPersonasLunes = document.getElementById(  "mainForm_lblDevolverAcumPersonasLunes");
      this.lblDevolverAcumMontoPagart = document.getElementById(  "mainForm_lblDevolverAcumMontoPagart");
      this.lblPorcentajeEntradaCaja = document.getElementById(  "mainForm_lblPorcentajeEntradaCaja");
      this.btAceptar = document.getElementById("mainForm_btAceptar");
      

      this.btAceptar.onclick = () =>
        controlador.agregarBoxCinema({
          dineroInicial: this.inDineroInicial.value,
        });

      
     
      
      this.btAgregar.onclick = () => 
        controlador.mostrarVistaFamilia();
    
    
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
    reportarFamilia({
      nombre,
      cantidadP,
      dia,
      montoPagar,
      funcionM,
      devolverAuxNombre,
      promedioPagadoLunes,
      dineroTotalCaja,
      devolverAcumPersonasLunes,
      devolverAcumMontoPagart,
      porcentajeEntradaCaja,

    }) {
      this.tabla.innerHTML += `
      <tr>
        <td>${nombre}</td>
         <td>${cantidadP}</td>
        <td>${dia}</td>
        <td>${montoPagar}$</td>
        <td>${funcionM}</td>
      </tr>`;
      this.lblDevolverAuxNombre.innerHTML = devolverAuxNombre;
      this.lblPromedioPagadoLunes.innerHTML = promedioPagadoLunes;
      this.lblDineroTotalCaja.innerHTML = dineroTotalCaja;
      this.lblDevolverAcumPersonasLunes.innerHTML =  devolverAcumPersonasLunes;
      this.lblDevolverAcumMontoPagart.innerHTML =  devolverAcumMontoPagart;
      this.lblPorcentajeEntradaCaja.innerHTML =  porcentajeEntradaCaja;
    }
  }
  