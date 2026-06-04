export default {
	deleteVehicle: async () => {
  await DeleteVehicle.run(
    () => {
      showAlert("Vozilo uspešno obrisano!", "success");
      GetVehicles.run();
    },
    () => {
      showAlert(DeleteVehicle.data.errors[0]?.message || "Greška pri brisanju!", "error");
    }
  );
}
}