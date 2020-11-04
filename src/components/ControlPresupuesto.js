import React from 'react';
import { botonAlerta } from '../helpers'

const ControlPresupuesto = ({presupuesto, saldo}) => {

    
     return ( 
        <>
        <div className="alert alert-primary">
            Presupuesto: {presupuesto}
        </div>

        <div className={ botonAlerta(presupuesto, saldo) }>
            Restante: { saldo}

        </div>


        </>
      );
}
    export default ControlPresupuesto;