import React from 'react';
import PropTypes from 'prop-types';

import { reviewPresupuesto } from '../helpers/Helper';

const Presupuesto = ({ presupuesto, restante }) => {
	return (
		<>
			<div className='alert alert-primary'>Presupuesto: €. {presupuesto}</div>
			<div className={reviewPresupuesto(presupuesto, restante)}>
				Restante: €. {restante}
			</div>
		</>
	);
};

Presupuesto.propTypes = {
	presupuesto: PropTypes.number.isRequired,
	restante: PropTypes.number.isRequired,
};

export default Presupuesto;
