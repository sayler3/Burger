const connection = require("./connection");

// Helper function for SQL syntax to add question marks in query
const printQuestionMarks = (num) => {
	const arr = [];

	for (let i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
};

const orm = {
	selectAll(tableInput, cb) {
		const queryString = `SELECT * FROM ${tableInput};`;
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne(table, cols, vals, cb) {
		let queryString = `INSERT INTO ${table}`;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		connection.query(queryString, vals, (err, result) => {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	updateOne(table, condition, cb) {
		let queryString = `UPDATE ${table}`;

		queryString += " SET ";
		queryString += "devoured = 1";
		queryString += " WHERE ";
		queryString += condition;
		queryString += ";";

		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	clearTable(table, cb) {
		let queryString = `DELETE FROM ${table}`;
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
};

module.exports = orm;
