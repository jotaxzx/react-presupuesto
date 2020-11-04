import React, { useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const FormularioGastos = ({guardarGasto, guardarCrearGasto}) => {

    const [state, setState] = useState({
        nombre:'',
        cantidad: 0
    });
    const [error, setError] = useState(false);

    

    // fc para guarda nombre y cantidad
    const guardar = ({target}) => {
            setState({
                ...state,
                [target.name]: target.value
                
            })
        
        
    }

    /*const parsegIntguardar = ({target}) => {
        setState({
            ...state,
            [target.name]: parseInt(target.value)
            
        })
    
    
}*/

    const agregarGasto = (e) => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        
        // pasar gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el formulario
        setState({
            nombre: '',
            cantidad: 0
           })



    }
    
    const { nombre, cantidad } = state; 

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos</h2>
            { error ? <Error mensaje="debe rellenar los campos o Presupuesto incorrecto"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={guardar}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="text"
                    name="cantidad"
                    className="form-control"
                    placeholder="Ej. 3000"
                    value={cantidad}
                    onChange={guardar}
                />
            </div>

            <input 
                type="submit"
                className="btn btn-primary form-control"
                value="Agregar Gasto"

            />

        </form>
      );
}
 
export default FormularioGastos;