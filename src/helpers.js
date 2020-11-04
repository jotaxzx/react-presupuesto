export const botonAlerta =  (presupuesto, saldo) => {

    let boton;


    if(  (presupuesto / 4 ) >= saldo ) {
        boton='alert alert-danger'

    } else if ( (presupuesto / 2 ) >= saldo  ) {
        boton='alert alert-warning'
    }else {
        boton='alert alert-success'
    }
    return boton;
    
}

