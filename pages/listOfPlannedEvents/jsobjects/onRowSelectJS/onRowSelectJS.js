export default {
	Table1onRowSelected: async () => {
		const selectedId = Table1.selectedRow.id;
		const fullRow = Table1.tableData.find(row => row.id === selectedId);

		await storeValue('previewRow', Table1.selectedRow);
		await storeValue('previewVehicleImage', fullRow?.vehicles?.image_url || null);
		await storeValue('previewVehicleName', fullRow?.vehicles?.equipment_name || null);
		await GetPlannedEventsByVehicle.run();
		showModal('singlePlannedEventView');
	}
}