import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Error from './Error';

const Form = ({ setGasto, setShowGasto }) => {
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const addGasto = (e) => {
		e.preventDefault();

		/// Validate
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
			setError(true);
			return;
		}

		/// If the validation
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};

		/// Pass the Qty to the principal component
		setGasto(gasto);
		setShowGasto(true);

		/// Reset Form
		setCantidad(0);
		setNombre('');
	};

	return (
		<form onSubmit={addGasto}>
			<h2>Agrega tus gastos aquí</h2>

			{error ? (
				<Error message='Por favor indica los datos correctamente.' />
			) : null}

			<div className='campo'>
				<label>Nombre Gasto</label>
				<input
					type='text'
					className='u-full-width'
					placeholder='Ej. Transporte'
					value={nombre}
					onFocus={() => setError(false)}
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>
			<div className='campo'>
				<label>Cantidad Gasto</label>
				<input
					type='number'
					className='u-full-width'
					placeholder='Ej. 300'
					value={cantidad}
					onFocus={() => setError(false)}
					onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
				/>
			</div>
			<input
				type='submit'
				className='button-primary u-full-width'
				value='Agregar Gasto'
			/>
		</form>
	);
};

Form.propTypes = {
	setGasto: PropTypes.func.isRequired,
	setShowGasto: PropTypes.func.isRequired,
};

export default Form;
