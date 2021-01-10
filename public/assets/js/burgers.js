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
					location.reload("/");
				} else {
					alert("Something went wrong!");
				}
			});
		});
	});
}

//Create a burger
const addBtn = document.getElementById("addButton");

if (addBtn) {
	addBtn.addEventListener("submit", (e) => {
		e.preventDefault();

		const name = document.getElementById("burger-input").value.trim();
		const newBurger = {
			burger_name: name,
		};

		fetch("/api/burgers", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},

			body: JSON.stringify(newBurger),
		}).then((response) => {
			if (response.ok) {
				console.log("Burger created!");
				location.reload();
			} else {
				alert("Somthing went wrong when creating your burger!");
			}
		});
	});
}

//Clear Table
const deleteBtn = document.getElementById("delete");

if (deleteBtn) {
	deleteBtn.addEventListener("click", (e) => {
		e.preventDefault();

		fetch("/api/burgers", {
			method: "DELETE",
		}).then((res) => {
			console.log("The table has been cleared");
			location.reload();
		});
	});
}
