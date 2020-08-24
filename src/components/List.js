import React from 'react';
import PropTypes from 'prop-types';

import Gasto from './Gasto';

const List = ({ gastos }) => {
	return (
		<>
			<div className='gastos-realizados'>
				<h2>Listado</h2>
				{gastos.map((gasto) => (
					<Gasto gasto={gasto} key={gasto.id} />
				))}
			</div>
		</>
	);
};

List.propTypes = {
	gastos: PropTypes.array.isRequired,
};

export default List;
