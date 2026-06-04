export default {
  otvoriIzmenu: async () => {
		// Sačuvaj vrednosti PRIJE otvaranja modala
		await storeValue('editEventId', Table1.triggeredRow.id);
		await storeValue('editVehicleId', Table1.triggeredRow.vehicle_id);
		await storeValue('editPlannedDate', Table1.triggeredRow.planned_date);
		await storeValue('editEventDate', Table1.triggeredRow.event_date);
		await storeValue('editFutureMileage', Table1.triggeredRow.future_mileage);
		await storeValue('editComment', Table1.triggeredRow.comment);
		await storeValue('eventFormMode', 'edit');
		await storeValue('editWorkDescription', Table1.triggeredRow.work_description);
		// Otvori modal
		showModal('addPlannedService');

		// Sačekaj render, pa resetuj dropdown da ponovo pokupi store vrednost
		await new Promise(resolve => setTimeout(resolve, 300));
		resetWidget('vozilo_servis_plan', false);
		
	},
	
	dodajNovi: async () => {
		await storeValue('editEventId', null);
		await storeValue('editVehicleId', null);
		await storeValue('editPlannedDate', null);
		await storeValue('editEventDate', null);
		await storeValue('editFutureMileage', null);
		await storeValue('editWorkDescription', null);
		await storeValue('editComment', null);
		await storeValue('eventFormMode', 'add');

		showModal('addPlannedService');
		await new Promise(resolve => setTimeout(resolve, 300));
		resetWidget('vozilo_servis_plan', false);
	}
}