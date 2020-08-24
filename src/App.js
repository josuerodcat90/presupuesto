import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Presupuesto from './components/Presupuesto';

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [showQuestion, setShowQuestion] = useState(true);
	const [gastos, setGastos] = useState([]);
	const [gasto, setGasto] = useState({});

	useEffect(() => {
		setGastos([...gastos, gasto]);
	}, [gasto]);

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
									<Form setGasto={setGasto} />
								</div>
								<div className='one-half column'>
									<List gastos={gastos} />
									<Presupuesto presupuesto={presupuesto} restante={restante} />
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
