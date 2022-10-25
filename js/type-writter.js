class TypeWritter {
	constructor(txtElement, words, wait = 1000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
	}
	type() {
		// Current index og word
		const current = this.wordIndex % this.words.length;
		// Get full text of curret word
		const fullTxt = this.words[current];
		// Check if Deleting
		if(this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		}else{
			// ADD char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		// Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		// Init Type speed
		let typeSpeed = 200;
		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if(!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
		}else if(this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 300;
		}
		setTimeout(() => this.type(), typeSpeed); //
	}
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init APP
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init Type Writter
	new TypeWritter(txtElement, words, wait);
}