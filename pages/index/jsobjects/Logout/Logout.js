export default {
    logout: async () => {
        await storeValue('logovan', false, true);
        await storeValue('korisnikId', null, true);
        await storeValue('korisnikIme', null, true);
        await storeValue('korisnikPrezime', null, true);
        await storeValue('korisnikEmail', null, true);
        await storeValue('korisnikRole', null, true);
        await storeValue('aktivnaStr', null, true);
        await storeValue('editUserId', null, true);

        navigateTo('login');
    }
}