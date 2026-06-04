export default {
  addVehicleButtononClick: async () => {
    let hasError = false;

    if (!naziv_vozila.text) {
      showAlert("• Naziv je obavezan", "error");
      hasError = true;
    }

    if (!registarski_broj.text) {
      showAlert("• Registarski broj je obavezan", "error");
      hasError = true;
    }

    if (hasError) return;

    try {
      await AddVehicle.run(
        () => {
          showAlert("Vozilo uspešno dodato!", "success");
          closeModal("addVehicle");
          GetVehicles.run();
        },
        () => {
          showAlert("Greška pri dodavanju vozila!", "error");
        }
      );
    } catch (e) {
      showAlert(e.message || "Greška pri dodavanju vozila!", "error");
    }
  }
}