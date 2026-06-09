export default {
    login: async () => {
				
			await storeValue('logovan', false, true);
    	await storeValue('korisnikRole', null, true);
			
        // Validacija
        if (!inp_email.text) {
            showAlert("Unesite email!", "error");
            return;
        }
        if (!inp_lozinka.text) {
            showAlert("Unesite lozinku!", "error");
            return;
        }

        // Provjera u bazi
        const result = await LoginUser.run();

        if (result.length > 0) {
            const korisnik = result[0];

            // Sačuvaj sesiju
            await storeValue('logovan', true, true);
						await storeValue('korisnikId', korisnik.id, true);
						await storeValue('korisnikIme', korisnik.ime, true);
						await storeValue('korisnikEmail', korisnik.email, true);
						await storeValue('korisnikRole', korisnik.role, true);
            showAlert("Dobrodošao " + korisnik.ime + "!", "success");

            // Preusmeri na glavnu stranicu
            navigateTo('index');
        } else {
            showAlert("Pogrešan email ili lozinka!", "error");
        }
    }
}