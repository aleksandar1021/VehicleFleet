export default {
    checkLogin: async () => {
        if (!appsmith.store.logovan) {
            navigateTo('login');
            return;
        }

        const role = (appsmith.store.korisnikRole || '').toLowerCase();
					console.log("ULOGAA:" + role)

        if (role !== 'admin' && role !== 'menadzer') {
					console.log("ULOGAA:" + role)
						storeValue('iframeUrl', 'https://app.appsmith.com/app/vehiclefleet/blankpage-6a199460238152f20247be0f')
						return;
        }
    }
}