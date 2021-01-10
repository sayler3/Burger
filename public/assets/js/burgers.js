// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
	}
});

const devourBtn = document.querySelectorAll(".dBurger");

if (devourBtn) {
	devourBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			// console.log(e.target);
		});
	});
}
