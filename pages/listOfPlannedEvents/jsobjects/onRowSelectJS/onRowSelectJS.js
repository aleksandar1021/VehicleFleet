export default {
  Table1onRowSelected: async () => {
  await storeValue('previewRow', Table1.selectedRow);
  await storeValue('previewVehicleName', Table1.selectedRow.vehicles?.equipment_name || Table1.selectedRow.vehicles);
  await storeValue('previewVehicleImage', Table1.selectedRow.vehicles?.image_url);
  await GetPlannedEventsByVehicle.run();
  showModal('singlePlannedEventView');
		
		console.log(Table1.selectedRow)
}
}