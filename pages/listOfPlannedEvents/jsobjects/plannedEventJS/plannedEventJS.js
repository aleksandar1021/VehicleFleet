export default {
	dodajServis: async () => {
		let hasError = false;

		if (!vozilo_servis_plan.selectedOptionValue) {
			showAlert("• Vozilo je obavezno", "error");
			hasError = true;
		}

		if (!planirani_datum_servis.formattedDate) {
			showAlert("• Planirani datum je obavezan", "error");
			hasError = true;
		}

		if (hasError) return;

		try {
			if (appsmith.store.eventFormMode === 'edit') {
				await UpdatePlannedService.run();
				showAlert("Servis uspešno izmenjen!", "success");
			} else {
				await AddPlannedService.run();
				showAlert("Servis uspešno planiran!", "success");
			}
			closeModal("addPlannedService");
			GetPlannedEvents.run();
		} catch (e) {
			showAlert(e.message || "Greška!", "error");
		}
	}
}