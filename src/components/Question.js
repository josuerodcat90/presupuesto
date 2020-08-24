import React, { useState } from 'react';

import Error from './Error';

const Question = ({ setPresupuesto, setRestante, setShowQuestion }) => {
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const definePrespuesto = (e) => {
		setCantidad(parseInt(e.target.value, 10));
	};

	const addPresupuesto = (e) => {
		e.preventDefault();

		/// Validate
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true);
			return;
		}

		/// If Validation pass
		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setShowQuestion(false);
	};

	return (
		<>
			<h2>Coloca tu Presupuesto</h2>

			{error ? <Error message='El presupuesto es incorrecto' /> : null}

			<form onSubmit={addPresupuesto}>
				<input
					type='number'
					placeholder='Coloca tu Presupuesto'
					className='u-full-width'
					onFocus={() => setError(false)}
					onChange={definePrespuesto}
				/>
				<input
					type='submit'
					className='u-full-width button-primary'
					value='Definir Prespuesto'
				/>
			</form>
		</>
	);
};

export default Question;
