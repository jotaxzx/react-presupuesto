import React, { useState } from 'react'
import Error from './Error';

export const Pregunta = ({ guardarPresupuesto, guardarSaldo, actualizarPregunta }) => {

    const [cantidadIngresada, setCantidadIngresada] = useState(0);
    const [error, setError] = useState(false)

    //fc lee el presupuesto, setear el presupuesto
    const definirPresupuesto = e => {
        setCantidadIngresada( parseInt(e.target.value, 10))
    }
    
    //fc que valida el valor de presupuesto 
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validacion
        if (cantidadIngresada < 1 || isNaN(cantidadIngresada)) {
            setError(true);
            return;
        }else{
            setError(false);
            guardarPresupuesto(cantidadIngresada);
            guardarSaldo(cantidadIngresada);
            actualizarPregunta(false);
        }


    }

    return (
        <>
            <h2> Coloca tu presupuesto</h2>

            { error ? <Error mensaje="el valor es incorrecto"/> : null }

            <form onSubmit={agregarPresupuesto}>
                <input 
                type="text"
                className="form-control"
                placeholder="coloca tu presupuesto"
                onChange={definirPresupuesto}
                />

                <br/>

                <input
                type="submit"
                className=" btn btn-primary form-control"
                value="Definir presupuesto"
                />
            </form>
        </>
    )
}

export default Pregunta;