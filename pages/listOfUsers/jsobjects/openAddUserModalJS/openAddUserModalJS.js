export default {
	otvoriDodavanje: async () => {
		resetWidget('Input1', true);
		resetWidget('Input2', true);
		resetWidget('Input4', true);
		resetWidget('Input5', true);
		resetWidget('Select1', true);

		showModal('addUserModal');
	}
}