export default {
    Table1primaryColumnscustomColumn1onClick: async () => {
        await DeleteUser.run();
        showAlert("Korisnik obrisan!", "success");
        await GetUsers.run();
    }
}