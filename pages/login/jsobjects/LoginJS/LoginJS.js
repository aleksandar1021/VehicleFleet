export default {
  login: async () => {
    await storeValue('logovan', false, true);
    await storeValue('korisnikRole', null, true);

    if (!inp_email.text) {
      showAlert("Unesite email!", "error");
      return;
    }
    if (!inp_lozinka.text) {
      showAlert("Unesite lozinku!", "error");
      return;
    }

    const result = await LoginUser.run();
    if (result.length > 0) {
      const korisnik = result[0];
      await storeValue('logovan', true, true);
      await storeValue('korisnikId', korisnik.id, true);
      await storeValue('korisnikIme', korisnik.ime, true);
      await storeValue('korisnikEmail', korisnik.email, true);
      await storeValue('korisnikRole', korisnik.role, true);
      showAlert("Dobrodošao " + korisnik.ime + "!", "success");
      navigateTo('index');
    } else {
      showAlert("Pogrešan email ili lozinka!", "error");
    }
  }
}