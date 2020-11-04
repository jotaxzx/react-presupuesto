import React from 'react';

const Listado = ({gastos}) => {



    return ( 
        <div className="gastos-realizados"> 
        <h2>Listado de Gastos</h2>
        {gastos.map(gasto => {
            return <li key={gasto}> 
            <p> 
                {gasto.nombre}
                 <span className="gasto"> $ { gasto.cantidad } </span>
            </p>
            
            
            </li>
        })}
            
        </div>
     );
}
 
export default Listado;