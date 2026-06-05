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

    // Odredi image_url pre pokretanja query-ja
    let imageUrl = Table1.triggeredRow.image_url || null;
    try {
      if (trenutna_slika.files && trenutna_slika.files.length > 0) {
        imageUrl = trenutna_slika.files[0].data;
      }
    } catch (e) {
      // Nema nove slike, zadrzavamo postojecu
    }
    await storeValue('updateImageUrl', imageUrl);

    try {
      await UpdateVehicle.run();
      showAlert("Vozilo uspešno izmenjeno!", "success");
      closeModal("editVehicle");
      GetVehicles.run();
    } catch (e) {
      showAlert("Greška: " + (e.message || JSON.stringify(e)), "error");
    }
  }
}