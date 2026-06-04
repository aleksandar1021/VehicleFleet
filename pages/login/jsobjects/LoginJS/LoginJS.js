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
            await storeValue('logovan', true);
            await storeValue('korisnikId', korisnik.id);
            await storeValue('korisnikIme', korisnik.ime);
            await storeValue('korisnikEmail', korisnik.email);
            await storeValue('korisnikRole', korisnik.role);

            showAlert("Dobrodošao " + korisnik.ime + "!", "success");

            // Preusmeri na glavnu stranicu
            navigateTo('index');
        } else {
            showAlert("Pogrešan email ili lozinka!", "error");
        }
    }
}