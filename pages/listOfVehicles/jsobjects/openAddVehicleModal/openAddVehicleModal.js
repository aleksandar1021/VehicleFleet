export default {
	otvoriDodavanje: async () => {
		// Resetuj sva polja na prazno
		resetWidget('naziv_vozila', true);
		resetWidget('registarski_broj', true);
		resetWidget('proizvodjac', true);
		resetWidget('model', true);
		resetWidget('tip_vozila', true);
		resetWidget('godina_proizvodnje', true);
		resetWidget('kilometraza', true);
		resetWidget('datum_kilometraze', true);
		resetWidget('istek_registracije', true);
		resetWidget('osiguravajuca_kuca', true);
		resetWidget('broj_polise', true);
		resetWidget('zeleni_karton', true);
		resetWidget('istek_kasko', true);
		resetWidget('broj_kasko_polise', true);
		resetWidget('podrazumevani_vozac', true);
		resetWidget('vehicle_image', true);

		await storeValue('addImageUrl', null);
		showModal('addVehicle');
	}
}