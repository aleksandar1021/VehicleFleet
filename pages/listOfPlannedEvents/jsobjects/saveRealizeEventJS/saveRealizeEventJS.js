export default {
	saveRealizedService: async () => {
		let hasError = false;

		if (!iznos_real.text) {
			showAlert("• Iznos je obavezan", "error");
			hasError = true;
		}

		if (!valuta_real.selectedOptionValue) {
			showAlert("• Valuta je obavezna", "error");
			hasError = true;
		}

		if (!auto_servis_real.text) {
			showAlert("• Naziv servisa je obavezan", "error");
			hasError = true;
		}

		if (!kilometraza_real.text) {
			showAlert("• Kilometraža je obavezna", "error");
			hasError = true;
		}

		if (!datum_real.formattedDate) {
			showAlert("• Datum je obavezan", "error");
			hasError = true;
		}

		if (!zaposleni_real.selectedOptionValue) {
			showAlert("• Zaposleni je obavezan", "error");
			hasError = true;
		}

		if (hasError) return;

		try {
			await RealizeEvent.run();
			showAlert("Događaj uspešno realizovan!", "success");
			closeModal('realizedService');
			GetPlannedEvents.run();
		} catch (e) {
			showAlert("Greška: " + (e.message || JSON.stringify(e)), "error");
		}
	}
}