import React, { useState } from 'react';

import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [showQuestion, setShowQuestion] = useState(true);
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
						{showQuestion ? (
							<Question
								setPresupuesto={setPresupuesto}
								setRestante={setRestante}
								setShowQuestion={setShowQuestion}
							/>
						) : (
							<div className='row'>
								<div className='one-half column'>
									<Form addNewGasto={addNewGasto} />
								</div>
								<div className='one-half column'>
									<List />
								</div>
							</div>
						)}
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
