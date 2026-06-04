export default {
    saveUser: async () => {
        if (!imeEdit.text || imeEdit.text.trim() === '') {
            showAlert("Ime je obavezno!", "error");
            return;
        }
        if (!prezimeEdit.text || prezimeEdit.text.trim() === '') {
            showAlert("Prezime je obavezno!", "error");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEdit.text)) {
            showAlert("Email nije ispravan!", "error");
            return;
        }
        if (!roleEdit.selectedOptionValue) {
            showAlert("Izaberite ulogu!", "error");
            return;
        }

        await UpdateUser.run();
        showAlert("Korisnik uspešno izmenjen!", "success");
        closeModal("editUserModal");
        await GetUsers.run();
    }
}