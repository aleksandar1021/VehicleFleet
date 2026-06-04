export default {
	Image1onClick () {
		if (trenutna_slika.files.length > 0) {
    storeValue('previewImageUrl', trenutna_slika.files[0].data);
  	}	
	}
}