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

			const id = e.currentTarget.getAttribute("data-id");
			const devoured = e.currentTarget.getAttribute("data-devoured");
			const plateEmpty = {
				devoured: devoured,
			};
			console.log(id);

			fetch(`/api/burgers/${id}`, {
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
                },
                
                body: JSON.stringify(plateEmpty),
			}).then((response) => {
                if (response.ok) {
                    location.reload('/');
                } else {
                    alert('Something went wrong!')
                }
            })
		});
	});
}
