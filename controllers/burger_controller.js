const express = require("express");
const router = express.Router();
// Importing the models to use their database functions.
const burger = require("../models/burger");

//Create all routes
router.get("/", (req, res) => {
	burger.selectAll((data) => {
		const hbsObject = {
			burgers: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", (req, res) => {
	burger.insertOne(["burger_name"], [req.body.burger_name], (results) => {
		res.json({ id: results.insertId });
	});
});

router.put("api/burgers/:id", (req, res) => {
	const condition = `id = ${req.params.id}`;

	// console.log('condition', condition);

	burger.updateOne(
		{
			devoured: req.body.devoured,
		},
		condition,
		(results) => {
			if (results.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		}
	);
});

// Exporting routes for server.js to use.
module.exports = router;
