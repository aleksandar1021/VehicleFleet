export default {
  Table1onRowSelected: async () => {
    await storeValue('previewRow', Table1.selectedRow);
		await GetPlannedEventsByVehicle.run();

    showModal('singlePlannedEventView');
  }
}