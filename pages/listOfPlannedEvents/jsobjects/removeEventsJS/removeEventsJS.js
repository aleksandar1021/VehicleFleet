export default {
	obrisiDogadjaj: async () => {
		try {
			await DeletePlannedEvent.run();
			showAlert("Planirani događaj uspešno obrisan!", "success");
			GetPlannedEvents.run();
		} catch (e) {
			showAlert(e.message || "Greška pri brisanju!", "error");
		}
	}
}