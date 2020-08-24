export const reviewPresupuesto = (presupuesto, restante) => {
	let styleClass;

	if (presupuesto / 4 > restante) {
		styleClass = 'alert alert-danger';
	} else if (presupuesto / 2 > restante) {
		styleClass = 'alert alert-warning';
	} else {
		styleClass = 'alert alert-success';
	}

	return styleClass;
};
