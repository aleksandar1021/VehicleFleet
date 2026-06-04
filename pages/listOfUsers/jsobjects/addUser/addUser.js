export default {
    Button3onClick: async () => {
        
        if (!Input1.text || Input1.text.trim() === '') {
            showAlert("Ime je obavezno!", "error");
            return;
        }
        if (!Input2.text || Input2.text.trim() === '') {
            showAlert("Prezime je obavezno!", "error");
            return;
        }
        if (!Input4.text || Input4.text.trim() === '') {
            showAlert("Email je obavezan!", "error");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Input4.text)) {
            showAlert("Email nije ispravan!", "error");
            return;
        }
        if (!Input5.text || Input5.text.trim() === '') {
            showAlert("Lozinka je obavezna!", "error");
            return;
        }
        if (Input5.text.length < 6) {
            showAlert("Lozinka mora imati najmanje 6 karaktera!", "error");
            return;
        }
        if (!Select1.selectedOptionValue) {
            showAlert("Izaberite ulogu!", "error");
            return;
        }

        // Provera duplikata — koristi Input4.text, ne emailEdit.text!
        const postojeci = await CheckEmail.run({ email: Input4.text });
        if (postojeci.length > 0) {
            showAlert("Korisnik sa tim emailom već postoji!", "error");
            return;
        }

        await AddUser.run();
        showAlert("Korisnik uspešno dodat!", "success");
        closeModal("addUserModal");
        await GetUsers.run();  
    }
}