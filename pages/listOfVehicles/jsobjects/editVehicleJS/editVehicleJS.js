export default {
  addVehicleButtonCopyonClick: async () => {
    let hasError = false;

    if (!naziv_vozilaCopy.text) {
      showAlert("• Naziv je obavezan", "error");
      hasError = true;
    }

    if (!registarski_brojCopy.text) {
      showAlert("• Registarski broj je obavezan", "error");
      hasError = true;
    }

    if (hasError) return;

    await UpdateVehicle.run(
      () => {
        showAlert("Vozilo uspešno izmenjeno!", "success");
        closeModal("editVehicle");
        GetVehicles.run();
      },
      () => {
        showAlert("Greška pri izmeni vozila!", "error");
      }
    );
  }
}