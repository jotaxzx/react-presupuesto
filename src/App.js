import React, { useState, useEffect } from 'react'
import Pregunta from './components/Pregunta'
import FormularioGastos from './components/FormularioGastos'
import Listado  from './components/Listado'
import ControlPresupuesto  from './components/ControlPresupuesto'

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  

  
  
   
  /* const eliminarGasto = (id) => {
    const  listaGastos = gastos.filter(gasto => gasto.id !== id  );
    guardarGastos(listaGastos);   

  } */

 

 
 
  // actualiza el restante
  useEffect(() => {
    if(crearGasto){
      guardarGastos([
        ...gastos,
        gasto
      ]);
      // restar el presupuesto
      const presupuestoRestante = saldo - gasto.cantidad;
      guardarSaldo(presupuestoRestante);

      // una vez que se ejecute lo de arriba resetear a false
      guardarCrearGasto(false);


    }
    
  }, [gasto, crearGasto, gastos, saldo ])



  return (
    <div className="container">
      <header>
        <h1>
          Mi Bolsillo
        </h1>

        <div className="main-content content">
          { mostrarPregunta ? 
          (
            <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarSaldo={guardarSaldo}
            actualizarPregunta={actualizarPregunta}
            />

          ) : 
          (
            <div className="row">
            <div className="col">
              <FormularioGastos 
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
              />
            </div>

            <div className="col">
              <Listado 
              gastos={gastos}
              
              presupuesto={presupuesto} 
              saldo={saldo}
              
              />

              <ControlPresupuesto 
              presupuesto={presupuesto} 
              saldo={saldo}
              
              />
            </div>

          </div>


          )}

          

          


        </div>
        
      </header>
     </div>
  );
}

export default App;
