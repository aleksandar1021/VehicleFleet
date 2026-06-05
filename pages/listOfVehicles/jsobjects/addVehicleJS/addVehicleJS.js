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

    // Odredi image_url pre pokretanja query-ja
    let imageUrl = null;
    try {
      if (vehicle_image.files && vehicle_image.files.length > 0) {
        imageUrl = vehicle_image.files[0].data;
      }
    } catch (e) {
      // Nema slike
    }
    await storeValue('addImageUrl', imageUrl);

    try {
      await AddVehicle.run();
      showAlert("Vozilo uspešno dodato!", "success");
      closeModal("addVehicle");
      GetVehicles.run();
    } catch (e) {
      showAlert("Greška: " + (e.message || JSON.stringify(e)), "error");
    }
  }
}