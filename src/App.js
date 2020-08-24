import React, { useState } from 'react';

import Pregunta from './components/Pregunta';
import Form from './components/Form';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [showPregunta, setShowPregunta] = useState(true);
	const [gastos, setGastos] = useState([]);

	const addNewGasto = (gasto) => {
		setGastos([...gastos, gasto]);
	};

	return (
		<>
			<div className='container'>
				<header>
					<h1>Gastos Semanales</h1>
					<div className='contenido-principal contenido'>
						{showPregunta ? (
							<Pregunta
								setPresupuesto={setPresupuesto}
								setRestante={setRestante}
								setShowPregunta={setShowPregunta}
							/>
						) : (
							<div className='row'>
								<div className='one-half column'>
									<Form addNewGasto={addNewGasto} />
								</div>
								<div className='one-half column'>2</div>
							</div>
						)}
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
